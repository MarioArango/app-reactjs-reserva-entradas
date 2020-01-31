import React from 'react'

class BadgeForm extends React.Component {



    handleClick = (e) => {
        console.log('HICISTE CLICK')
    
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>REGISTRESE!!</h1>
                <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>NOMBRE</label>
                            <input onChange={this.props.onChange} type="text" className="form-control" name="nombre" value={this.props.formValues.nombre} />
                        </div>
                        <div className="form-group">
                            <label>APELLIDO</label>
                            <input onChange={this.props.onChange} type="text"  className="form-control" name="apellido" value={this.props.formValues.apellido} />
                        </div>
                        <div className="form-group">
                            <label>CARRERA</label>
                            <input onChange={this.props.onChange} type="text" className="form-control" name="carrera" value={this.props.formValues.carrera} />
                        </div>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input onChange={this.props.onChange} type="email" className="form-control" name="email" value={this.props.formValues.email} />
                        </div>
                        <div>
                            <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BadgeForm