exports.componentTemplate = name => `import React from 'react'
import {${name}Element} from './${name}Styles'

export const ${name} = () => {
  return (
    <${name}Element>
      hello from ${name}
    </${name}Element>
  )
}
`
