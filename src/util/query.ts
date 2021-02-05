import { promises as fs } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import type { APIResponse } from '../types'

// This is only public because its scope is limited
// to my public projects :)
const foodIsGood = Buffer.from(
	'ZjMyYzQ4ZGNiMWYxMTg2NGVjMTNiNDkzYzEwNzY4YTdlZDQxODU5Zg==',
	'base64'
).toString('ascii')

export const getProjects = async () => {
	const response = await fetch('https://api.github.com/graphql', {
		body: JSON.stringify({
			query: await fs.readFile(join(__dirname, 'query.graphql'), 'utf-8')
		}),
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${foodIsGood}`,
			'Content-Type': 'application/json'
		},
		method: 'POST'
	}).then((rawResponse) => rawResponse.json())

	return (response as APIResponse).data.user.repositories.edges
		.map((edge) => edge.node)
		.map((node) => [
			node.name,
			node.description.replace(/[^\u0020-\u007F]/g, '').trim(),
			node.primaryLanguage.name
		])
}
