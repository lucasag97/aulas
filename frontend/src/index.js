import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const router = (
    <Router>
        <Route exact path="/" component={App} />
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
