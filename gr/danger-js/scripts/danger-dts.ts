import * as fs from "fs"
import * as prettier from "prettier"

const mapLines = (s: string, func: (s: string) => string) =>
  s
    .split("\n")
    .map(func)
    .join("\n")

const createDTS = () => {
  const header = `//
// Autogenerated from scripts/danger-dts.ts
//

import * as GitHub from "@octokit/rest"

`
  const footer = ``

  let fileOutput = ""

  const dslFiles = fs
    .readdirSync("source/dsl")
    .filter(f => !f.startsWith("_tests"))
    .map(f => `source/dsl/${f}`)

  dslFiles.forEach(file => {
    // Sometimes they have more stuff, in those cases
    // offer a way to crop the file.
    const content = fs.readFileSync(file).toString()
    if (content.includes("/// End of Danger DSL definition")) {
      fileOutput += content.split("/// End of Danger DSL definition")[0]
    } else {
      fileOutput += content
    }
    fileOutput += "\n"
  })

  // The definition of all the exposed vars is inside
  // the Dangerfile.js file.
  const allDangerfile = fs.readFileSync("source/runner/Dangerfile.ts").toString()
  const moduleContext = allDangerfile
    .split("/// Start of Danger DSL definition")[1]
    .split("/// End of Danger DSL definition")[0]

  // we need to add either `declare function` or `declare var` to the interface
  const context = mapLines(moduleContext, (line: string) => {
    if (line.length === 0 || line.includes("*")) {
      const newLine = line.trim()
      // Make sure TSLint passes
      if (newLine.startsWith("*")) {
        return " " + newLine
      }
      return newLine
    }
    if (line.includes("export type")) {
      return line
    }
    if (line.includes("(")) {
      return "declare function " + line.trim()
    }
    if (line.includes(":")) {
      return "declare const " + line.trim()
    }
    return ""
  })

  fileOutput += context

  const chainDefs = fs.readFileSync("distribution/commands/utils/chainsmoker.d.ts", "utf8")
  const chainDefsMinusDefaultExport = chainDefs
    .split("\n")
    .filter(line => {
      return !line.startsWith("export default function")
    })
    .join("\n")

  fileOutput += chainDefsMinusDefaultExport

  // Remove all JS-y bits
  fileOutput = fileOutput
    .split("\n")
    .filter(line => {
      return !line.startsWith("import") && !line.includes("* @type ")
    })
    .filter(line => {
      return !line.includes("Please don't have")
    })
    .join("\n")

  const trimmedWhitespaceLines = fileOutput.replace(/\n\s*\n\s*\n/g, "\n")
  const noRedundantExports = trimmedWhitespaceLines
    .replace(/export interface/g, "interface")
    .replace(/export type/g, "type")
  const indentedBody = mapLines(noRedundantExports, line => (line.length ? line : ""))

  const def = header + indentedBody + footer

  return prettier.format(def, {
    parser: "typescript",
    printWidth: 120,
    semi: false,
    singleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    proseWrap: "always",
  })
}

export default createDTS