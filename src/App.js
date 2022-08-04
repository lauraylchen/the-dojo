import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useState } from 'react'

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
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

function App() {
  const { user, authIsReady } = useAuthContext()
  const [open, setOpen] = useState(false)

  const openOnlineUsers = () => {
    setOpen(true)
  }

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            {!open && user && <button className="openbtn" onClick={openOnlineUsers}>All Users</button>}
            <Switch>
              <Route exact path='/'>
                {!user && <Redirect to='/login' />}
                {user && <Dashboard />}
              </Route>
              <Route path='/login'>
                {user && <Redirect to='/' />}
                {!user && <Login />}
              </Route>
              <Route path='/signup'>
                {user && <Redirect to='/' />}
                {!user && <Signup />}
              </Route>
              <Route path='/create'>
                {!user && <Redirect to='/login' />}
                {user && <Create />}
              </Route>
              <Route path='/projects/:id'>
                {!user && <Redirect to='/login' />}
                {user && <Project />}
              </Route>
            </Switch>
          </div>
          {open && user && <OnlineUsers setOpen={setOpen} />}
        </BrowserRouter>
      )}
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
