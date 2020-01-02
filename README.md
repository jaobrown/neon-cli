neon-cli
========

CLI Tool built for Element Three&#39;s Neon frontend

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
<!-- [![Version](https://img.shields.io/npm/v/neon-cli.svg)](https://npmjs.org/package/neon-cli)
[![Downloads/week](https://img.shields.io/npm/dw/neon-cli.svg)](https://npmjs.org/package/neon-cli) -->
[![License](https://img.shields.io/npm/l/neon-cli.svg)](https://github.com/jaobrown/neon-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g neon-cli
$ neon COMMAND
running command...
$ neon (-v|--version|version)
neon-cli/0.0.1 darwin-x64 node-v10.16.3
$ neon --help [COMMAND]
USAGE
  $ neon COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`neon help [COMMAND]`](#neon-help-command)
* [`neon make`](#neon-make)

## `neon help [COMMAND]`

display help for neon

```
USAGE
  $ neon help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `neon make`

Creates new components for neon

```
USAGE
  $ neon make

OPTIONS
  -n, --name=name  name of new component
  -t, --type=type  type of new component

DESCRIPTION
  ...
  With this command, you can create a new component in the appropriate directory.
  Makes the right thing the easy thing.
```

_See code: [src/commands/make.js](https://github.com/jaobrown/neon-cli/blob/v0.0.1/src/commands/make.js)_
<!-- commandsstop -->
