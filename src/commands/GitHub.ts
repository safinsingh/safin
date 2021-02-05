import type { GluegunToolbox } from 'gluegun'
import open from 'open'

export const run = async (toolbox: GluegunToolbox) => {
	const {
		print: { info }
	} = toolbox

	info('Opening GitHub...')
	await open('https://github.com/safinsingh')
}

export default {
	alias: 'g',
	name: 'github',
	run
}
