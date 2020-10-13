import * as inquirer from 'inquirer'
import open from 'open'
import { cyan } from 'chalk'

import { fail, success } from './logger'
import { log, header, intro } from './constants'
import { getRecent } from './queries'
import { prettifyProjects } from './util'

log(cyan(intro))
log(cyan(header))

inquirer
	.prompt({
		type: 'list',
		message: 'Select action',
		name: 'action',
		choices: [
			'Check out my latest projects',
			'Connect with me on LinkedIn',
			'Go to my website',
			'Done!',
		],
	})
	.then((answers) => {
		switch (answers.action) {
			case 'Go to my website':
				success('Opened safin.dev!')
				open('https://safin.dev/')
				break
			case 'Check out my latest projects':
				getRecent()
					.then((res) => {
						prettifyProjects(res.data.user.repositories.edges)
					})
					.catch((err) => fail(err))
				break
			case 'Connect with me on LinkedIn':
				success('Opened linkedin.com!')
				open('https://www.linkedin.com/in/safin-singh/')
				break
			case 'Done!':
				success('Thanks for checking this out! See you later!')
				break
			default:
				fail(
					"It seems like you've chosen an invalid option somehow. Please open an issue!"
				)
				break
		}
	})
	.catch((err) => {
		fail(err)
	})
