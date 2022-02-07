import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './views/Layout/Layout'
import Search from './views/Search/Search'
import Devs from './views/Devs/Devs'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/devs">
            <Devs />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
