import React from 'react'

import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import header from '../images/badge-header.svg'
//import stars from '../images/stars.svg'

import '../styles/BadgeNew.css'


class BadgeNew extends React.Component {

    state = {
        form: {
            nombre: '',
            apellido: '',
            carrera: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <div>
                
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img src={header} alt="Header" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                nombre={this.state.form.nombre}
                                apellido={this.state.form.apellido}
                                carrera={this.state.form.carrera}
                                email={this.state.form.email}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew