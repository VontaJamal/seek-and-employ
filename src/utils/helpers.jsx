// eslint-disable-next-line import/prefer-default-export
export const mungeResults = (dev) => ({
  id: dev.id,
  avatar: dev.avatar_url,
  login: dev.login,
  followers: dev.followers,
  following: dev.following,
  bio: dev.bio,
  url: dev.html_url,
  location: dev.location,
})
