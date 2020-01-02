const {Command, flags} = require('@oclif/command')
const fs = require('fs')
// const path = require('path')
// const {cli} = require('cli-ux')

class MakeCommand extends Command {
  async run() {
    const {flags} = this.parse(MakeCommand)
    const name = flags.name || 'NewFile'
    const type = flags.type || 'layout'

    const folderName = `./src/components/${type}s/${name}`

    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
      }
      if (!fs.existsSync(`${folderName}/${name}`)) {
        fs.writeFile(`${folderName}/${name}.jsx`, 'Hello from a new component', 'utf8', err => {
          if (err) throw err
          // eslint-disable-next-line no-console
          console.log(`${name} component created succesfully.`)
        })
        fs.writeFile(`${folderName}/${name}Styles.js`, 'Hello from a new component', 'utf8', err => {
          if (err) throw err
          // eslint-disable-next-line no-console
          console.log(`${name} component styles created succesfully.`)
        })
        fs.appendFile(`./src/components/${type}s/index.js`, `export * from "./${name}/${name}"`, err => {
          if (err) throw err
          // eslint-disable-next-line no-console
          this.log(`Exported ${name} from ${folderName} index.`)
        })
      }
    } catch (error) {
      this.log(error)
    }

    this.log(`Neon made ${name}.jsx and ${name}Styles.js in the ${type}s directory`)
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
