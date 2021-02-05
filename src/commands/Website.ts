import type { GluegunToolbox } from 'gluegun'
import open from 'open'

export const run = async (toolbox: GluegunToolbox) => {
	const {
		print: { info }
	} = toolbox

	info('Opening website...')
	await open('https://safin.dev')
}

export default {
	alias: 'w',
	name: 'website',
	run
}
