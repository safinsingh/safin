import type { GluegunToolbox } from 'gluegun'
import { getProjects } from '../util/query'

export const run = async (toolbox: GluegunToolbox) => {
	const {
		print: { table }
	} = toolbox

	const projects = await getProjects()
	table([['Name', 'Description', 'Language'], ...projects], {
		format: 'lean'
	})
}

export default {
	alias: 'p',
	name: 'projects',
	run
}
