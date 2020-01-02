const {Command, flags} = require('@oclif/command')
const fs = require('fs')
const {cli} = require('cli-ux')
// const path = require('path')

class MakeCommand extends Command {
  async run() {
    const {flags} = this.parse(MakeCommand)
    const name = flags.name || 'NewFile'
    const type = flags.type || 'layout'

    const folderName = `./src/components/${type}s/${name}`

    try {
      cli.action.start('Making your component...')
      await cli.wait(1000)
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
      }
      if (!fs.existsSync(`${folderName}/${name}`)) {
        fs.writeFile(
          `${folderName}/${name}.jsx`,
          'Hello from a new component',
          'utf8',
          err => {
            if (err) throw err
          }
        )
        fs.writeFile(
          `${folderName}/${name}Styles.js`,
          'Hello from a new component',
          'utf8',
          err => {
            if (err) throw err
          }
        )
        cli.action.stop('👍')

        cli.action.start(`Exporting your component from ${type}s index.`)
        await cli.wait(750)
        fs.appendFile(
          `./src/components/${type}s/index.js`,
          `\nexport * from "./${name}/${name}"`,
          err => {
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

MakeCommand.description = `Creates new components for neon
...
With this command, you can create a new component in the appropriate directory.
Makes the right thing the easy thing.
`

MakeCommand.flags = {
  type: flags.string({char: 't', description: 'type of new component'}),
  name: flags.string({char: 'n', description: 'name of new component'}),
}

module.exports = MakeCommand
