import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './styles/Login.sass'

export default class Login extends React.Component {
    render () {
      return (
            <div className="login-container">
                <div></div>
                <div className='login-box'>
                    <h1>Login</h1>
                    <div className="input-group input-group-lg form-group">
                        <input type="text" id="loginform-username" className="form-control" name="LoginForm[username]" placeholder="Usuario o email" aria-required="true"></input>
                    </div>
                    <div className="input-group input-group-lg form-group">
                        <input type="password" id="loginform-password" className="form-control" name="LoginForm[password]" placeholder="Ingresa tu contraseña" aria-required="true"></input>
                    </div>
                    <div>
                        <Link to="/login" style={{color: 'black'}}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <div className='centered mt-3'>
                        <Link to="/">
                            <button type="submit" className="btn btn-success btn-lg login-btn" name="login-button">Ingresar</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}