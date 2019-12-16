import React from 'react'
import logo from './assets/img/logo.svg'
import './App.sass'

export default function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App para el front-end de Sistema de Gestión de Aulas UNAJ
        </p>
      </header>
    </div>
  )
}