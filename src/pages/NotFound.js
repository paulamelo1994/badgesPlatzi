import React from 'react';

import '../styles/NotFound.css';
import  logoFound  from '../images/logo.svg';

function NotFound(){
    return(
        <div className="NotFound__container">
            <div className=" col-12 col-md-3">
                <img className="NotFound__image" src={logoFound} alt="logo" width="100%"/>
            </div>
            <div className="col-12 col-md-9" >
                <h1>404: Page not found</h1>
                <p>Lo sentimos, no pudimos encontrar la página solicitada.</p>   
            </div>
             
        
        </div>
    )
}
export default NotFound;