import fetch from 'node-fetch'

const query = `query { 
  user(login: "safinsingh") {
    repositories(first: 6, orderBy: {field: PUSHED_AT, direction: DESC}) {
      edges {
        node {
          ...on Repository {
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

export async function getRecent() {
  const r = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${foodIsGood}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  return await r.json()
}
