const { REACT_APP_GITHUB_API_URL } = process.env

// eslint-disable-next-line import/prefer-default-export
export const fetchDevs = async (query) => {
  try {
    const res = await fetch(`${REACT_APP_GITHUB_API_URL}/users?q=${query}&per_page=25`)
    const githubResults = await res.json()
    return githubResults
  } catch (error) {
    console.error('Error Fetching Devs from `fetchDevs`')
    throw new Error(error)
  }
}
