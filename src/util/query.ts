import fetch from 'node-fetch'
import type { APIResponse } from '../types'

const query = `query {
	user(login: "safinsingh") {
		repositories(
			first: 6
			orderBy: { field: PUSHED_AT, direction: DESC }
			affiliations: OWNER
		) {
			edges {
				node {
					... on Repository {
						name
						description
						primaryLanguage {
							name
						}
					}
				}
			}
		}
	}
}`

// This is only public because its scope is limited
// to my public projects :)
const foodIsGood = Buffer.from(
	'ZjMyYzQ4ZGNiMWYxMTg2NGVjMTNiNDkzYzEwNzY4YTdlZDQxODU5Zg==',
	'base64'
).toString('ascii')

export const getProjects = async () => {
	const response = await fetch('https://api.github.com/graphql', {
		body: JSON.stringify({ query }),
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
