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
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}`

const token = 'Bearer 00c22d2036b2cea9e909683ee7faf9be8e4838ca'

export async function getRecent() {
  const r = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  return await r.json()
}
