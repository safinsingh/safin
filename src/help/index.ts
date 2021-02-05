import { bold, cyan, whiteBright } from 'chalk'

export const logo = `${whiteBright(bold('Welcome'))} to ${cyan(
	bold("Safin's")
)} CLI!`

export const helpMessage = `${bold('Usage')}:
	safin [-h/--help] [subcommand]

${bold('Subcommands')}:
	github, g         - open my GitHub profile
	linkedin, l       - open my LinkedIn profile
	projects, p       - display the last couple projects I've been working on
	twitter, t        - open my Twitter profile
	website, w        - open my website

${bold('Flags')}:
	-h, --help        - display this help message
	-v, --version     - display the current version of this CLI

${bold('Examples')}:
	safin
	safin --version
	safin projects

${bold('Examples')}:
	When run without a subcommand, \`safin\` walks through an interactive
	prompt for each subcommand. This is reccomended for first-time users.`

export const leaveMessage = `Bye!
`
