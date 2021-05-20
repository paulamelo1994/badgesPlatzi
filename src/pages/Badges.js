import React from 'react';

import BadgesList from '../components/BadgesList';

import '../styles/Badges.css';
import confLogo from '../images/badge-header.svg';

import { Link } from 'react-router-dom';

import api from '../api';

class Badges extends React.Component{

    state= {
      loading: true,
      data: undefined,
      error: null

    }  

    componentDidMount(){
      //es el mejor lugar para llamar una API. Nos asegura que el componente ya está listo. 
      this.fetchData(); //hay que declarar el método
    }

    fetchData = async () =>{
      //Paso 1: Declarar el estado con loading cierto y el error null por si ya se ha modificado su valor en otra llamada.
      this.setState( { loading: true, error: null })

      //Paso 2: Comenzar la llamada a la API con un try catch

      try{
        //se hace la llamada a la api
        const data= await api.badges.list(); //como es una promesa se usa el await y en la función se añade el async
        this.setState( { loading: false, data: data});

      }catch(error){
        this.setState( {loading: false, error: error});

      }
    }

    render(){
      if (this.state.loading){
        return 'Loading...';
      }

      if (this.state.error){
        return `Error: ${this.state.error}`;
      }
        return (
           
            <>
                 
                 <div className="Badges">
                     <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={confLogo} alt="Conf logo" />
                        </div>
                     </div>
                 </div>
                 <div className="Badges__container">
                     <div className="Badges__buttons">
                         <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                     </div>
                     <div className="Badges__list">
                         <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                             
                             
                         </div>
                     </div>
                 </div>
            </>

        )
           
        
        
    }


}
export default Badges;