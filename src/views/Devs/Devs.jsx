import { Link } from 'react-router-dom'
import DevList from '../../components/DevList/DevList'

export default function Devs() {
  return (
    <>
      <DevList />
      <Link to="/">Back to Search &larr; </Link>
    </>
  )
}
