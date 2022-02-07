// eslint-disable-next-line import/prefer-default-export
export const mungeResults = (githubData) => {
  return githubData.items.map((item) => ({
    avatar: item.avatar_url,
    login: item.login,
    htmlUrl: item.html_url,
  }))
}
