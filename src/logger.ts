import { red, yellow, blue, cyan } from 'chalk'

import { log } from './constants'

export const fail = (message: string): void => {
	log(red(`[-] ${message}`))
	process.exit(1)
}

export const warn = (message: string): void => {
	log(yellow(`[!] ${message}`))
}

export const info = (message: string): void => {
	log(blue(`[*] ${message}`))
}

export const success = (message: string): void => {
	log(cyan(`[+] ${message}`))
}
