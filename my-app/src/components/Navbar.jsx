import React from 'react'
import logoNav from '../images/logo.svg'
import '../styles/Navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="" className="Navbar__brand">
                        <img src={logoNav} alt="Logo " className="Navbar__brand-logo"/>
                        <span className="font-weight-light">Untels</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar