import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

//traer estilos
import '../styles/BadgeNew.css';

import header from '../images/badge-header.svg';

class BadgeNew extends React.Component{

    state = { 
        
        form: {
                //se inicializan los valores del formulario para evitar el warning al pasar un input no controlado a controlado.
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        } 
    };

    handleChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form, //SPREAD: incluye los valores que tendría el form antes (permite que no se sobreescriban en consola)
                [e.target.name]: e.target.value
             }
         })
     };
               

    render(){

        return(
            <div>
                
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="image-fluid" src={header} alt="logo" />
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-6">
                       
                        <Badge 
                        //para que cambie mientras se llena el form se añade la variable en lugar de un nombre fijo
                            name={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            avatar="https://es.gravatar.com/avatar?d=identicon"/>
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form} 
                            />

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew;

