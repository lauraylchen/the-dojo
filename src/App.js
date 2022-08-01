import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Project from './pages/project/Project'

// components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App

/* pages

  - dashboard (homepage) -> list out all projects
  - login
  - signup
  - create
  - project (project details)

*/
