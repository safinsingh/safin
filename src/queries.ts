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

// This is only public because its scope is limited
// to my public projects :)
const token = '03e22e708383f79763231612bdffba24fa319006'

export async function getRecent() {
  const r = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  return await r.json()
}
