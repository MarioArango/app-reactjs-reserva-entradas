import React from 'react'
import logoConf from '../images/badge-header.svg'
import '../styles/Badge.css'

class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoConf} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img src="" alt="" className="Badge__avatar"/>
                    <h1>{this.props.nombre} <br/>{this.props.apellido}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.carrera}</h3>
                    <div>@{this.props.email}</div>
                </div>
                <div className="Badge__footer">
                    <p>#Untels</p>
                </div>
            </div>
        )
    }
}

export default Badge