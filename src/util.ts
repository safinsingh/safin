import Table from 'cli-table3'

export interface project {
	node: {
		name: string
		description: string
		primaryLanguage: {
			name: string
		}
	}
}

export interface apiRes {
	data: {
		user: {
			repositories: {
				edges: Array<project>
			}
		}
	}
}

export const prettifyProjects = (p: Array<project>): void => {
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
