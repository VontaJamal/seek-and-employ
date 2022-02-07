export default function Dev({ dev }) {
  return (
    <div className="card m-2 cursor-pointer border-2 border-gray-400 rounded-lg hover:shadow-md hover:border-purple-500 transform hover:-translate-y-1 transition-all duration-200">
      <div className="m-3">
        <h2 className="text-lg mb-2">-{dev.login}</h2>
        <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
          {dev.login}
        </p>
      </div>
    </div>
  )
}
