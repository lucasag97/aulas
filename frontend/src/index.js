import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import * as serviceWorker from './serviceWorker'
import { withRouter } from 'react-router'

const NavWithRouter = withRouter(Navigation)


const router = (
    <Router>
        <Route path="/" component={NavWithRouter}/>
        {/* <Navigation/> */}
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/login" component={Login} />
    </Router>
  )

render(
    router,
    document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
