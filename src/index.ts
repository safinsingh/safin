import type { GluegunToolbox } from 'gluegun'
import { build } from 'gluegun'
import { helpMessage, logo } from './help'
import { prompt } from './prompt'

void build('safin')
	.src(__dirname)
	.help({
		alias: 'h',
		dashed: true,
		name: 'help',
		run: async (toolbox: GluegunToolbox) =>
			toolbox.print.info(helpMessage + '\n')
	})
	.version()
	.checkForUpdates(5)
	.defaultCommand({
		run: async (toolbox: GluegunToolbox) => {
			toolbox.print.info(logo)
			await prompt(toolbox)
		}
	})
	.create()
	.run()
