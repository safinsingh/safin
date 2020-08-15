import Table from 'cli-table3'

interface project {
  node: {
    name: string
    description: string
    primaryLanguage: {
      name: string
    }
  }
}

export const prettifyProjects = (p: project[]): void => {
  const table = new Table({
    head: ['Name', 'Description', 'Language'],
    colWidths: [20, 50, 20],
  })

  p.forEach((el) => {
    if (el.node.name === 'safinsingh') return
    table.push([
      el.node.name,
      el.node.description,
      el.node.primaryLanguage.name,
    ])
  })

  console.log(table.toString())
}
