const {Command} = require('@oclif/command')
const fs = require('fs')
const {cli} = require('cli-ux')
const {componentTemplate} = require('../templates/component')
// const path = require('path')

class MakeCommand extends Command {
  async run() {
    const {args} = this.parse(MakeCommand)
    const type = args.type
    const name = args.name
    const folderName = `./src/components/${type}s/${name}`

    try {
      cli.action.start('Making your component...')
      await cli.wait(500)
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
      }
      if (!fs.existsSync(`${folderName}/${name}`)) {
        fs.writeFile(
          `${folderName}/${name}.jsx`,
          componentTemplate(name),
          'utf8',
          (err) => {
            if (err) throw err
          }
        )
        // todo: come here - you need to make index file work
        fs.writeFile(
          `${folderName}/index.js`,
          `export * from "./${name}"`,
          'utf8',
          (err) => {
            if (err) throw err
          }
        )
        cli.action.stop('👍')

        cli.action.start(`Exporting your component from ${type}s index.`)
        await cli.wait(500)
        fs.appendFile(
          `./src/components/${type}s/index.js`,
          `export * from "./${name}"\n`,
          (err) => {
            if (err) throw err
          }
        )
        cli.action.stop('👍')
      }
    } catch (error) {
      this.log(error)
    }
  }
}

MakeCommand.description = `Creates new components for neon projects

With this command, you can create a new component in the appropriate directory.
Makes the right thing the easy thing.
`

MakeCommand.args = [
  {
    name: 'type',
    required: true,
    description: 'The type of component.',
    default: 'layout',
  },
  {
    name: 'name',
    required: true,
    description: 'The name of component.',
    default: 'NewFile',
  },
]

module.exports = MakeCommand
