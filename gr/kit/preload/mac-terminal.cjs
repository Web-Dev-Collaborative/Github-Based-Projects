var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/preload/utils.ts
var assignPropsTo = (source, target) => {
  Object.entries(source).forEach(([key, value]) => {
    target[key] = value;
  });
};

// src/preload/api/global.ts
var globalApi = {
  cd: "shelljs",
  cp: "shelljs",
  chmod: "shelljs",
  echo: "shelljs",
  exec: "shelljs",
  exit: "shelljs",
  grep: "shelljs",
  ln: "shelljs",
  ls: "shelljs",
  mkdir: "shelljs",
  mv: "shelljs",
  sed: "shelljs",
  tempdir: "shelljs",
  test: "shelljs",
  which: "shelljs",
  spawn: "child_process",
  spawnSync: "child_process",
  fork: "child_process",
  get: "axios",
  put: "axios",
  post: "axios",
  patch: "axios",
  readFile: "fs/promises",
  writeFile: "fs/promises",
  appendFile: "fs/promises",
  createWriteStream: "fs",
  readdir: "fs/promises",
  compile: "handlebars"
};
global.cwd = process.cwd;
global.pid = process.pid;
global.stderr = process.stderr;
global.stdin = process.stdin;
global.stdout = process.stdout;
global.uptime = process.uptime;
Object.entries(globalApi).forEach(([key, value]) => {
  global[key] = (...args) => {
    return require(value)[key](...args);
  };
});
global.path = require("path");
global._ = new Proxy({}, {
  get(_o, p) {
    return require("lodash")[p];
  }
});
global.uuid = (...args) => require("uuid").v4(...args);
global.chalk = (...text) => require("chalk")(...text);
global.paste = (...args) => require("clipboardy").read(...args);
global.copy = (...args) => require("clipboardy").write(...args);
global.trash = async (input, options) => {
  ;
  (typeof input === "string" ? [input] : input).flatMap((x) => x).forEach((trashArg) => {
    echo(global.chalk`{yellow ${trashArg}} moved to {yellow trash}`);
  });
  return await require("trash")(input, options);
};
global.rm = async (input, options) => {
  echo(global.chalk`{yellow rm} doesn't exist. You're probably looking for {yellow trash}`);
  await global.trash(input, options);
};
global.wait = async (time) => new Promise((res) => setTimeout(res, time));
global.checkProcess = (pid) => {
  let {stdout, stderr} = exec(`kill -0 ` + pid);
  return stdout;
};
global.home = (...pathParts) => {
  let path = require("path");
  let os = require("os");
  return path.resolve(os.homedir(), ...pathParts);
};
global.isFile = async (file) => test("-f", file);
global.isDir = async (dir) => test("-d", dir);
global.isBin = async (bin) => Boolean(exec(`command -v ${bin}`, {
  silent: false
}).stdout);
global.args = [];
global.env = async (envKey, promptConfig = {placeholder: ""}) => {
  if (global.env[envKey])
    return global.env[envKey];
  let input = await global.kitPrompt(__objSpread({
    placeholder: `Set ${envKey} env to:`
  }, promptConfig));
  if (input.startsWith("~"))
    input = input.replace("~", global.env.HOME);
  await global.cli("set-env-var", envKey, input);
  global.env[envKey] = input;
  return input;
};
assignPropsTo(process.env, global.env);
global.env.KIT_BIN_FILE_PATH = process.argv[1];
global.env.KIT_SRC_NAME = process.argv[1].split(global.env.KENV.split(global.path.sep).pop()).pop();
global.env.KIT_SCRIPT_NAME = global.env.KIT_SRC_NAME.replace(".js", "");
global.kitPath = (...parts) => global.path.join(global.env.KIT, ...parts);
global.kenvPath = (...parts) => {
  return global.path.join(global.env.KENV, ...parts.filter(Boolean));
};
global.libPath = (...parts) => global.path.join(global.kenvPath("lib"), ...parts);
global.kitScriptFromPath = (path) => {
  path = path.replace(global.kenvPath() + "/", "");
  path = path.replace(/\.js$/, "");
  return path;
};
global.kitFromPath = (path) => {
  path = path.replace(global.env.KIT + "/", "");
  path = path.replace(/\.js$/, "");
  return path;
};
global.kitScript = global.kitScriptFromPath(global.env.KIT_SCRIPT_NAME);
global.db = (key, defaults) => {
  let low = require("lowdb");
  let FileSync = require("lowdb/adapters/FileSync");
  let _db = low(new FileSync(global.kenvPath("db", `${key}.json`)));
  _db._.mixin(require("lodash-id"));
  _db.defaults(defaults).write();
  return _db;
};

// src/preload/api/kit.ts
global.attemptImport = async (path, ..._args) => {
  global.updateArgs(_args);
  try {
    return await import(path + `?uuid=${global.uuid()}`);
  } catch (error) {
    console.warn(error.message);
    global.setPlaceholder(error.message);
    await global.wait(1e3);
    try {
      let stackWithoutId = error.stack.replace(/\?[^:]*/, "");
      console.warn(stackWithoutId);
      let errorFile = stackWithoutId.split("\n")[1].replace("at file://", "").replace(/:.*/, "").trim();
      let [, line, col] = stackWithoutId.split("\n")[1].replace("at file://", "").split(":");
      console.log({line, col});
      if (errorFile.includes(global.kenvPath())) {
        global.edit(errorFile, global.kenvPath(), line, col);
      }
    } catch {
    }
    await global.wait(2e3);
    exit(1);
  }
};
global.runSub = async (scriptPath, ...runArgs) => {
  return new Promise(async (res, rej) => {
    let values = [];
    if (!scriptPath.includes("/")) {
      scriptPath = global.kenvPath("scripts", scriptPath);
    }
    if (!scriptPath.startsWith(global.path.sep)) {
      scriptPath = global.kenvPath(scriptPath);
    }
    if (!scriptPath.endsWith(".js"))
      scriptPath = scriptPath + ".js";
    let scriptArgs = [
      ...global.args,
      ...runArgs,
      ...global.argOpts
    ].filter((arg) => {
      if (typeof arg === "string")
        return arg.length > 0;
      return arg;
    });
    let child = fork(scriptPath, scriptArgs, {
      stdio: "inherit",
      execArgv: [
        "--require",
        "dotenv/config",
        "--require",
        global.kitPath("preload/api.js"),
        "--require",
        global.kitPath("preload/kit.js"),
        "--require",
        global.kitPath("preload/mac.js")
      ],
      execPath: global.env.KIT_NODE,
      env: __objSpread(__objSpread({}, global.env), {
        KIT_PARENT_NAME: global.env.KIT_PARENT_NAME || global.env.KIT_SCRIPT_NAME,
        KIT_ARGS: global.env.KIT_ARGS || scriptArgs.join(".")
      })
    });
    let name = process.argv[1].replace(global.kenvPath() + global.path.sep, "");
    let childName = scriptPath.replace(global.kenvPath() + global.path.sep, "");
    console.log(childName, child.pid);
    let forwardToChild = (message) => {
      console.log(name, "->", childName);
      child.send(message);
    };
    process.on("message", forwardToChild);
    child.on("message", (message) => {
      console.log(name, "<-", childName);
      global.send(message);
      values.push(message);
    });
    child.on("error", (error) => {
      console.warn(error);
      values.push(error);
      rej(values);
    });
    child.on("close", (code) => {
      process.off("message", forwardToChild);
      res(values);
    });
  });
};
process.on("uncaughtException", async (err) => {
  console.warn(`UNCAUGHT EXCEPTION: ${err}`);
  exit();
});
global.send = async (channel, data) => {
  if (process?.send) {
    process.send(__objSpread({
      kitScript: global.kitScript,
      channel
    }, data));
  } else {
  }
};
if (process?.send) {
  let _consoleLog = console.log.bind(console);
  let _consoleWarn = console.warn.bind(console);
  console.log = async (...args) => {
    global.send("CONSOLE_LOG", {
      log: args.map((a) => typeof a != "string" ? JSON.stringify(a) : a).join(" ")
    });
  };
  console.warn = async (...args) => {
    global.send("CONSOLE_WARN", {
      warn: args.map((a) => typeof a != "string" ? JSON.stringify(a) : a).join(" ")
    });
  };
}
global.show = (html, options) => {
  global.send("SHOW", {options, html});
};
global.showImage = (image, options) => {
  global.send("SHOW_IMAGE", {
    options,
    image: typeof image === "string" ? {src: image} : image
  });
};
global.setPlaceholder = (text) => {
  global.send("SET_PLACEHOLDER", {
    text
  });
};
global.run = async (name, ..._args) => {
  global.onTabs = [];
  global.kitScript = name;
  global.send("RUN_SCRIPT", {
    name,
    args: _args
  });
  let kitScriptPath = global.kenvPath("scripts", global.kitScript) + ".js";
  return global.attemptImport(kitScriptPath, ..._args);
};
global.kit = async (scriptPath, ..._args) => {
  let kitScriptPath = global.kitPath("lib", scriptPath) + ".js";
  return await global.attemptImport(kitScriptPath, ..._args);
};
global.main = async (scriptPath, ..._args) => {
  let kitScriptPath = global.kitPath("main", scriptPath) + ".js";
  return await global.attemptImport(kitScriptPath, ..._args);
};
global.lib = async (scriptPath, ..._args) => {
  let kitScriptPath = global.libPath(scriptPath) + ".js";
  return await global.attemptImport(kitScriptPath, ..._args);
};
global.cli = async (cliPath, ..._args) => {
  let cliScriptPath = global.kitPath("cli/" + cliPath) + ".js";
  return await global.attemptImport(cliScriptPath, ..._args);
};
global.setup = async (setupPath, ..._args) => {
  global.setPlaceholder(`>_ setup: ${setupPath}...`);
  let setupScriptPath = global.kitPath("setup/" + setupPath) + ".js";
  return await global.attemptImport(setupScriptPath, ..._args);
};
global.kitLib = async (lib) => {
  return await global.kit(`kit/${lib}`);
};
global.tmp = (file) => {
  let scriptTmpDir = global.kenvPath("tmp", global.kitScript);
  mkdir("-p", scriptTmpDir);
  return global.kenvPath("tmp", global.kitScript, file);
};
global.inspect = async (data, extension) => {
  let dashedDate = () => new Date().toISOString().replace("T", "-").replace(/:/g, "-").split(".")[0];
  let tmpFilePath = global.kenvPath("tmp", global.kitScript);
  let formattedData = data;
  let tmpFullPath = global.path.join(tmpFilePath, `${dashedDate()}.txt`);
  if (typeof data === "object") {
    formattedData = JSON.stringify(data, null, "	");
    tmpFullPath = global.path.join(tmpFilePath, `${dashedDate()}.json`);
  }
  if (extension) {
    tmpFullPath = global.path.join(tmpFilePath, `${dashedDate()}.${extension}`);
  }
  mkdir("-p", tmpFilePath);
  await writeFile(tmpFullPath, formattedData);
  await global.edit(tmpFullPath);
};
global.compileTemplate = async (template, vars) => {
  let templateContent = await readFile(global.kenvPath("templates", template), "utf8");
  let templateCompiler = compile(templateContent);
  return templateCompiler(vars);
};
global.currentOnTab = null;
global.onTabs = [];
global.onTab = async (name, fn) => {
  global.onTabs.push({name, fn});
  if (global.arg.tab) {
    if (global.arg.tab === name) {
      global.send("SET_TAB_INDEX", {
        tabIndex: global.onTabs.length - 1
      });
      global.currentOnTab = await fn();
    }
  } else if (global.onTabs.length === 1) {
    global.send("SET_TAB_INDEX", {tabIndex: 0});
    global.currentOnTab = await fn();
  }
};
global.kitPrevChoices = [];
global.setChoices = async (choices) => {
  if (typeof choices === "object") {
    choices = choices.map((choice) => {
      if (typeof choice === "string") {
        return {
          name: choice,
          value: choice,
          id: global.uuid()
        };
      }
      if (typeof choice === "object") {
        if (!choice?.id) {
          choice.id = global.uuid();
        }
      }
      return choice;
    });
  }
  global.send("SET_CHOICES", {choices});
  global.kitPrevChoices = choices;
};
global.md = (markdown) => require("marked")(markdown);

// src/preload/os/mac.ts
global.applescript = async (script, options = {silent: true}) => {
  let formattedScript = script.replace(/'/g, `'"'"'`);
  if (global.env?.DEBUG) {
    await writeFile(global.kenvPath("tmp", "_debug.applescript"), script);
  }
  let {stdout, stderr} = exec(`osascript -e '${formattedScript}'`, options);
  if (stderr) {
    console.log(stderr);
    exit();
  }
  return stdout.trim();
};
global.terminal = async (script) => {
  let formattedScript = script.replace(/'|"/g, '\\"');
  let command = `tell application "Terminal"
  do script "${formattedScript}"
  activate
  end tell
  `;
  return await global.applescript(command);
};
global.iterm = async (command) => {
  command = `"${command.replace(/"/g, '\\"')}"`;
  let script = `
    tell application "iTerm"
        if application "iTerm" is running then
            try
                tell the first window to create tab with default profile
            on error
                create window with default profile
            end try
        end if
    
        delay 0.1
    
        tell the first window to tell current session to write text ${command}
        activate
    end tell
    `.trim();
  return await global.applescript(script);
};
var terminalEditor = (editor) => async (file) => {
  let supportedTerminalMap = {
    terminal: global.terminal,
    iterm: global.iterm
  };
  let {fileSearch} = await global.kit("file");
  let possibleTerminals = () => Object.entries(supportedTerminalMap).filter(async ([name, value]) => {
    return fileSearch(name, {
      onlyin: "/",
      kind: "application"
    });
  }).map(([name, value]) => ({name, value: name}));
  let KIT_TERMINAL = await global.env("KIT_TERMINAL", {
    placeholder: `Which Terminal do you use with ${editor}?`,
    choices: possibleTerminals()
  });
  return supportedTerminalMap[KIT_TERMINAL](`${editor} ${file}`);
};
global.edit = async (file, dir, line = 0, col = 0) => {
  if (global.arg?.edit === false)
    return;
  let possibleEditors = () => [
    "atom",
    "code",
    "emacs",
    "nano",
    "ne",
    "nvim",
    "sublime",
    "webstorm",
    "vim"
  ].filter((editor) => exec(`PATH="/usr/bin:/usr/local/bin" which ${editor}`, {silent: true}).stdout).map((name) => ({name, value: name}));
  let KIT_EDITOR = await global.env("KIT_EDITOR", {
    placeholder: "Which code editor do you use? (You can always change this later in .env)",
    choices: [
      ...possibleEditors(),
      {
        name: "None. Always copy path to clipboard",
        value: "copy"
      }
    ]
  });
  let code = async (file2, dir2, line2 = 0, col2 = 0) => {
    let codeArgs = ["--goto", `${file2}:${line2}:${col2}`];
    if (dir2)
      codeArgs = [...codeArgs, "--folder-uri", dir2];
    let command = `code ${codeArgs.join(" ")}`;
    exec(command, {
      env: __objSpread(__objSpread({}, process.env), {
        PATH: `/usr/local/bin:usr/bin:${process.env.PATH}`
      })
    });
  };
  let vim = terminalEditor("vim");
  let nvim = terminalEditor("nvim");
  let nano = terminalEditor("nano");
  let fullySupportedEditors = {code, vim, nvim, nano};
  let execEditor = (file2) => exec(`${KIT_EDITOR} ${file2}`, {
    env: __objSpread(__objSpread({}, process.env), {
      PATH: `/usr/local/bin:usr/bin:${process.env.PATH}`
    })
  });
  let editorFn = fullySupportedEditors[KIT_EDITOR] || execEditor;
  global.setPlaceholder(`Opening ${file} with ${global.env.KIT_EDITOR}`);
  let result = await editorFn(file, dir, line, col);
  if (result?.stderr) {
    console.warn(`STDERR ${result.stderr}`);
    exit();
  }
  console.log(global.chalk`> Opening {yellow ${file}} with {green.bold ${global.env.KIT_EDITOR}}`);
};

// src/preload/target/terminal.ts
global.kitPrompt = async (config) => {
  if (config?.choices) {
    config = __objSpread(__objSpread({}, config), {type: "autocomplete"});
  }
  config = __objSpread({type: "input", name: "value"}, config);
  if (typeof config.choices === "function") {
    let f = config.choices;
    if (config.choices.length === 0) {
      let choices = config.choices();
      if (typeof choices?.then === "function")
        choices = await choices;
      config = __objSpread(__objSpread({}, config), {
        choices
      });
    } else {
      let suggest = global._.debounce(async function(input) {
        let results = await f(input.replace(/[^0-9a-z]/gi, ""));
        this.choices = await this.toChoices(results);
        await this.render();
        return this.choices;
      }, 250);
      config = __objSpread(__objSpread({}, config), {
        choices: [],
        suggest
      });
    }
  }
  let promptConfig = __objSpread(__objSpread({}, config), {
    message: config.placeholder
  });
  let {value} = await require("enquirer").prompt(promptConfig);
  return value;
};
global.arg = async (messageOrConfig = "Input", choices) => {
  let firstArg = global.args.length ? global.args.shift() : null;
  if (firstArg) {
    let valid = true;
    if (typeof messageOrConfig !== "string" && messageOrConfig?.validate) {
      let {validate} = messageOrConfig;
      let validOrMessage = await validate(firstArg);
      if (typeof validOrMessage === "string" || !validOrMessage) {
        valid = false;
        console.log(validOrMessage);
      }
    }
    if (valid) {
      return firstArg;
    }
  }
  let config = {placeholder: ""};
  if (typeof messageOrConfig === "string") {
    config.placeholder = messageOrConfig;
  } else {
    config = messageOrConfig;
  }
  config.choices = choices;
  let input = await global.kitPrompt(config);
  let command = global.chalk`{green.bold ${global.env.KIT_SCRIPT_NAME} {yellow ${input}}} {yellow ${global.argOpts.join(" ")}}`;
  let nextTime = global.chalk`👉 Run without prompts by typing: ` + command;
  return input;
};
global.updateArgs = (arrayOfArgs) => {
  let argv = require("minimist")(arrayOfArgs);
  global.args = [...global.args, ...argv._];
  global.argOpts = Object.entries(argv).filter(([key]) => key != "_").flatMap(([key, value]) => {
    if (typeof value === "boolean") {
      if (value)
        return [`--${key}`];
      if (!value)
        return [`--no-${key}`];
    }
    return [`--${key}`, value];
  });
  assignPropsTo(argv, global.arg);
};
global.updateArgs(process.argv.slice(2));
global.npm = async (packageName) => {
  try {
    return require(packageName);
  } catch (error) {
    if (!global.arg?.trust) {
      let installMessage = global.chalk`\n{green ${global.env.KIT_SCRIPT_NAME}} needs to install the npm library: {yellow ${packageName}}`;
      let downloadsMessage = global.chalk`{yellow ${packageName}} has had {yellow ${(await get(`https://api.npmjs.org/downloads/point/last-week/` + packageName)).data.downloads}} downloads from npm in the past week`;
      let packageLink = `https://npmjs.com/package/${packageName}`;
      let readMore = global.chalk`
    Read more about {yellow ${packageName}} here: {yellow ${packageLink}}
    `;
      echo(installMessage);
      echo(downloadsMessage);
      echo(readMore);
      let message = global.chalk`Do you trust {yellow ${packageName}}?`;
      let config = {
        placeholder: message,
        choices: [
          {name: "Yes", value: true},
          {name: "No", value: false}
        ]
      };
      let trust = await global.kitPrompt(config);
      if (!trust) {
        echo(`Ok. Exiting...`);
        exit();
      }
    }
    echo(global.chalk`Installing {yellow ${packageName}} and continuing.`);
    await global.cli("install", packageName);
    let packageJsonPath = global.kenvPath("node_modules", packageName, "package.json");
    let packageJson = require(packageJsonPath);
    let packageImport = global.kenvPath("node_modules", packageName, packageJson?.main || "index.js");
    return require(packageImport);
  }
};
//# sourceMappingURL=mac-terminal.cjs.map
