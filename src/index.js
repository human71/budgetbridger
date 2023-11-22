import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Dashboard from './views/dashboard'
import Home from './views/home'
import Create from './views/create'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Home} exact path="/" />
        <Route component={Create} exact path="/create" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
