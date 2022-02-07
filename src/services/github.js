import { mungeResults } from '../utils/helpers'

const { REACT_APP_GITHUB_API_URL } = process.env

export const fetchDevs = async (query) => {
  try {
    const url = `${REACT_APP_GITHUB_API_URL}/search/users?q=${query}&per_page=30`
    const res = await fetch(url)
    const githubResults = await res.json()
    return githubResults
  } catch (error) {
    console.error('Error Fetching Devs from `fetchDevs`')
    throw new Error(error)
  }
}

export const fetchDevDetails = async (devList) => {
  const detailList = await Promise.all(
    devList.map(async ({ login }) => {
      const url = `${REACT_APP_GITHUB_API_URL}/users/${login}`
      const res = await fetch(url)
      const devData = await res.json()
      const devDetails = mungeResults(devData)
      return devDetails
    })
  )

  return detailList
}
