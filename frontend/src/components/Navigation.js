import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import logo from '../assets/img/logo3.png'
import './styles/Navigation.sass'

export default class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: 'Usuario'
        }
    }
    render () {
        if (this.props.location.pathname !== '/login') {
            return (
                    <div>
                        <Navbar expand="lg" className='navbar'>
                            <Navbar.Brand as={Link} to='/' className='brand'>
                                <img src={logo} className='img-responsive' alt=''/>
                            </Navbar.Brand>
                            <Nav className="mr-auto ml-3 nav">
                                <Nav.Link href="#home">
                                    INICIO
                                </Nav.Link>
                                <Nav.Link href="#sedes">SEDES</Nav.Link>
                                <Nav.Link href="#institutos">INSTITUTOS</Nav.Link>
                                <NavDropdown title="CARRERAS" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Información de carreras</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Oferta académica</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Oferta de exámenes</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="ADMINISTRACIÓN" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Registrar usuario</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Panel de administración</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Gestionar usuarios</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Reportes</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav className='nav nav-end'>
                                    <NavDropdown alignRight title={this.state.username}>
                                        <NavDropdown.Item as={Link} to='/login'>Salir</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                )
        } else {
            return (null)
        }
    }
}