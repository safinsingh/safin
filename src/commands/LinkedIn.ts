import type { GluegunToolbox } from 'gluegun'
import open from 'open'

export const run = async (toolbox: GluegunToolbox) => {
	const {
		print: { info }
	} = toolbox

	info('Opening LinkedIn...')
	await open('https://www.linkedin.com/in/safinsingh/')
}

export default {
	alias: 'l',
	name: 'linkedin',
	run
}
