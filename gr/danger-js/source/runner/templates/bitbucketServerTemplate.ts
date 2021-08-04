import { DangerResults } from "../../dsl/DangerResults"
import { Violation } from "../../dsl/Violation"

// This unicode emojis also work for old versions of bitbucket server, were emojis are not supported
const noEntryEmoji = "\u274C"
const warningEmoji = "⚠️"
const messageEmoji = "\u2728"

/**
 * Converts a set of violations into a Markdown section
 *
 * @param {string} name User facing title of section
 * @param {string} emoji Emoji name to show
 * @param {Violation[]} violations for section
 * @returns {string} Markdown
 */
function resultsSection(name: string, emoji: string, violations: Violation[]): string {
  if (violations.length === 0 || violations.every(violation => !violation.message)) {
    return ""
  }
  return (
    `\n` +
    `| ${emoji} | ${name}\n` +
    `| --- | --- |\n` +
    `\n` +
    violations
      .map(v => {
        return (
          "> " +
          v.message
            .replace(/<\/?code>/g, "`")
            .split("\n")
            .join("\n> ")
        )
      })
      .join("\n\n") +
    `\n`
  )
}

export const dangerIDToString = (id: string) => `danger-id-${id};`
export const fileLineToString = (file: string, line: number) => `  File: ${file};
  Line: ${line};`

export const dangerSignature = (results: DangerResults) => {
  let meta = results.meta || { runtimeName: "dangerJS", runtimeHref: "https://danger.systems/js" }
  return `Generated by ${warningEmoji} [${meta.runtimeName}](${meta.runtimeHref})`
}

/**
 * Postfix signature to be attached comment generated / updated by danger.
 */
export const dangerSignaturePostfix = (results: DangerResults, commitID?: string) => {
  let signature = dangerSignature(results)
  if (commitID !== undefined) {
    signature = `${signature} against ${commitID}`
  }
  return `
|    |
|---:|
| _${signature}_ |
`
}

/**
 * Comment to add when updating the PR status when issues are found
 */
export const messageForResultWithIssues = `${warningEmoji} Danger found some issues. Don't worry, everything is fixable.`

/**
 * A template function for creating a GitHub issue comment from Danger Results
 * @param {string} dangerID A string that represents a unique build
 * @param {DangerResults} results Data to work with
 * @param {string} commitID The hash that represents the latest commit
 * @returns {string} HTML
 */
export function template(dangerID: string, results: DangerResults, commitID?: string): string {
  return `
${resultsSection("Fails", noEntryEmoji, results.fails)}
${resultsSection("Warnings", warningEmoji, results.warnings)}
${resultsSection("Messages", messageEmoji, results.messages)}

${results.markdowns.map(v => v.message).join("\n\n")}

${dangerSignaturePostfix(results, commitID)}

[](http://${dangerIDToString(dangerID)})
`
}

export function inlineTemplate(dangerID: string, results: DangerResults, file: string, line: number): string {
  const printViolation = (emoji: string) => (violation: Violation) => {
    return `- ${emoji} ${violation.message}`
  }

  return `
[//]: # (${dangerIDToString(dangerID)})
[//]: # (${fileLineToString(file, line)})
${results.fails.map(printViolation(noEntryEmoji)).join("\n")}
${results.warnings.map(printViolation(warningEmoji)).join("\n")}
${results.messages.map(printViolation(messageEmoji)).join("\n")}
${results.markdowns.map(v => v.message).join("\n\n")}
  `
}