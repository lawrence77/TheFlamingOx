# Repo Configuration

The file describes the configurations ued in the repo for the following set of tools.

## Prettier

Prettier is an opinionated code formatter.
It is generally accepted that having a common style guide is valuable for a project and team but getting there is a very painful and unrewarding process.
People get very emotional around particular ways of writing code and nobody likes spending time writing and receiving nits. [1]

| Typescript Options       | Description                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `printWidth`             | Specify the line length that the printer will wrap on                                         |
| `tabWidth`               | Specify the number of spaces per indentation-level                                            |
| `useTabs`                | Indent lines with tabs instead of spaces                                                      |
| `semi`                   | Print semicolons at the ends of statements                                                    |
| `singleQuote`            | Use single quotes instead of double quotes                                                    |
| `quoteProps`             | Change when properties in objects are quoted                                                  |
| `trailingComma`          | Print trailing commas wherever possible when multi-lin                                        |
| `bracketSpacing`         | Print spaces between brackets in object literals                                              |
| `arrowParens`            | Include parentheses around a sole arrow function parameter                                    |
| `rangeStart`, `rangeEnd` | Format only a segment of a file                                                               |
| `proseWrap`              | Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer |
| `endOfLine`              | Specify which end of line character(s) to use                                                 |

## TsLint

TsLint uses a file named tslint.json or tslint.yaml to configure which rules get run and each of their options. [2]

| Options                                         | Description                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extends?: string | string[]`                   | The name of a built-in configuration preset (see built-in presets below), or a path or array of paths to other configuration files which are extended by this configuration.                                                                                                  |
| `rulesDirectory?: string | string[]`            | A path to a directory or an array of paths to directories of custom rules. These values are handled using node module resolution semantics, if an index.js is placed in your rules directory. We fallback to use relative or absolute paths, if the module can’t be resolved. |
| `rules?: { [name: string]: RuleSetting }`       | A map of rule names to their configuration settings. These rules are applied to .ts and .tsx files. Each rule is associated with an object containing `options?: any` and `severity?: "default" | "error" | "warning" | "off"`.                                               |
| `jsRules?: any | boolean`                       | Same format as rules or explicit true to copy all rule configurations for JS-compatible rules from rules. These rules are applied to .js and .jsx files.                                                                                                                      |
| `defaultSeverity?: "error" | "warning" | "off"` | The severity level that is applied to rules in this config file as well as rules in any inherited config files which have their severity set to “default”. If undefined, “error” is used as the defaultSeverity.                                                              |
| `linterOptions?: { exclude?: string[] }`        | An array of globs. Any file matching these globs will not be linted. All exclude patterns are relative to the configuration file they were specified in.                                                                                                                      |

### List of Rules

Lint rules encode logic for syntactic & semantic checks of TypeScript source code.
Click [here](https://palantir.github.io/tslint/rules/) for the list of rules and their descriptions.

### Custom Lint Rules

If TSLint’s core rules don’t have all the lint checks you’re looking for, you may [write your own custom rules](https://palantir.github.io/tslint/develop/custom-rules/) or use custom rules that others have developed.

Some commonly used custom rule packages in the TSLint community are listed in the [README](https://github.com/palantir/tslint/blob/master/README.md).

## TsConfig

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways. [3]

| Options             | Description                                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compilerOptions`   | List of compilerOptions. Property can be omitted, in which case the compiler’s defaults are used. See the full list of supported [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).           |
| `files`             | Property takes a list of relative or absolute file paths. All specified files will transpile to JavaScript.                                                                                                                        |
| `include | exclude` | Same functionality as `files`, but supports a list of glob-like file patterns. The supported glob wildcards are `?` (matches any one character), `*`(matches zero or more characters) , `**`(recursively matches any subdirectory) |
| `extends`           | TsConfig support inheritance with this property                                                                                                                                                                                    |
| `compileOnSave`     | When true, signals to the IDE to generate all files for a given tsconfig.json upon saving.                                                                                                                                         |

[1]: https://prettier.io/docs/en/index.html
[2]: https://palantir.github.io/tslint/usage/configuration/
[3]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
