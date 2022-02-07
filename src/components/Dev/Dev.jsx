export default function Dev({ dev }) {
  if (!dev) return null

  const { url, login: name, followers, following, location, bio, avatar } = dev
  return (
    <a href={url}>
      <figure className="card m-2 cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-md hover:border-purple-500 transform hover:-translate-y-1 transition-all duration-200 h-full">
        <div className="m-3">
          <div className="flex justify-center items-center">
            <img className="rounded-full py-2 w-32 h-25" src={avatar} alt={`${name}'s avatar`} />
            <h2 className="text-lg mb-2 text-center p-2 font-bold">-{name}</h2>
          </div>

          {location && (
            <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 text-center">
              🏠{location}
            </p>
          )}
          <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 px-4 m-4">
            {bio}
          </p>
          <div className="flex justify-around">
            <p className="font-light font-mono text-base text-gray-700 hover:text-gray-900 transition-all duration-200">
              <span className="text-purple-500">{followers}</span> followers
            </p>
            <p className="font-light font-mono text-base text-gray-700 hover:text-gray-900 transition-all duration-200">
              <span className="text-purple-500">{following}</span> following
            </p>
          </div>
        </div>
      </figure>
    </a>
  )
}
