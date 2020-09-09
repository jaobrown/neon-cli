exports.componentTemplate = (name) => `import React from "react"

export const ${name} = () => {
  return (
    <section className="py-10">
      <div className="container">
        hello from ${name}!
      </div>
    </section>
  )
}
`
