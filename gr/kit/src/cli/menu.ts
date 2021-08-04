let { scripts, info } = await cli("fns")

let infoToMenuItem = (script: Script): MenuItem => {
  let { command, menu, shortcut, description } = script

  return {
    ...script,
    name:
      (menu || command) + (shortcut ? `: ${shortcut}` : ``),
    value: command,
    description,
  }
}

let files = await scripts()

export let menu = (await Promise.all(files.map(info)))
  .filter(
    (item: MenuItem) =>
      !(item?.exclude && item?.exclude === "true")
  )
  .map(infoToMenuItem)
  .sort((a, b) => {
    let aName = a.name.toLowerCase()
    let bName = b.name.toLowerCase()

    return aName > bName ? 1 : aName < bName ? -1 : 0
  })
