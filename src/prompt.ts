import type { GluegunToolbox } from 'gluegun'
import type { PromptOptions } from 'gluegun/build/types/toolbox/prompt-enquirer-types'
import { run as runGitHub } from './commands/GitHub'
import { run as runLinkedIn } from './commands/LinkedIn'
import { run as runProjects } from './commands/Projects'
import { run as runTwitter } from './commands/Twitter'
import { run as runWebsite } from './commands/Website'
import { helpMessage, leaveMessage } from './help'

enum PromptChoice {
	PROJECTS = 'My projects',
	WEBSITE = 'My website',
	GITHUB = 'My GitHub',
	TWITTER = 'My Twitter',
	LINKEDIN = 'My LinkedIn',
	HELP = 'Help',
	NONE = 'Exit'
}

export const prompt = async (toolbox: GluegunToolbox) => {
	const {
		prompt: { ask },
		print: { info }
	} = toolbox

	console.log()
	const question: PromptOptions = {
		choices: [
			PromptChoice.PROJECTS,
			PromptChoice.WEBSITE,
			PromptChoice.GITHUB,
			PromptChoice.TWITTER,
			PromptChoice.LINKEDIN,
			PromptChoice.HELP,
			PromptChoice.NONE
		],
		message: 'What would you like to explore?',
		name: 'command',
		type: 'select'
	}

	const { command } = await ask(question)
	switch (command) {
		case PromptChoice.PROJECTS:
			await runProjects(toolbox)
			break
		case PromptChoice.WEBSITE:
			await runWebsite(toolbox)
			break
		case PromptChoice.GITHUB:
			await runGitHub(toolbox)
			break
		case PromptChoice.TWITTER:
			await runTwitter(toolbox)
			break
		case PromptChoice.LINKEDIN:
			await runLinkedIn(toolbox)
			break
		case PromptChoice.HELP:
			info(helpMessage)
			break
		case PromptChoice.NONE:
			info(leaveMessage)
			// eslint-disable-next-line node/no-process-exit
			process.exit(0)
		default:
			throw new Error('Unhandled option!')
	}

	await prompt(toolbox)
}
