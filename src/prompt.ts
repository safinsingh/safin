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
	const actions = {
		[PromptChoice.PROJECTS]: async () => runProjects(toolbox),
		[PromptChoice.WEBSITE]: async () => runWebsite(toolbox),
		[PromptChoice.GITHUB]: async () => runGitHub(toolbox),
		[PromptChoice.TWITTER]: async () => runTwitter(toolbox),
		[PromptChoice.LINKEDIN]: async () => runLinkedIn(toolbox),
		[PromptChoice.HELP]: async () => info(helpMessage),
		[PromptChoice.NONE]: async () => {
			info(leaveMessage)
			// eslint-disable-next-line node/no-process-exit
			process.exit(0)
		}
	}

	try {
		await actions[command as keyof typeof actions]()
	} catch {
		throw new Error('Unhandled option!')
	}

	await prompt(toolbox)
}
