import type { GluegunToolbox } from 'gluegun'
import open from 'open'

export const run = async (toolbox: GluegunToolbox) => {
	const {
		print: { info }
	} = toolbox

	info('Opening Twitter...')
	await open('https://twitter.com/safinsingh')
}

export default {
	alias: 't',
	name: 'twitter',
	run
}
