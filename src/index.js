// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//import Badge from './components/Badge';

import App from './components/App';

// const element = React.createElement(
//     'a', 
//     { href: 'http://platzi.com' }, 
//     'Ir a platzi');
// const element1 = React.createElement( 'h1', { }, 'Soy un  titulo' );

// const name= "Paula";

// const element= React.createElement(
//     'h1',
//     {},
//     `Hola, soy ${name}`
// );

// const jsx = <h1>Hola, soy {name} </h1>

// const jsx = (
//     <div>
//         <h1>Hola, soy el titulo</h1>
//         <p>Aquí empiezo a escribir mi información</p>
//         <p>Gracias por participar {name}</p>
//     </div>
// )


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<Badge name="Daniel" lastName="Bolivar" jobTilte="Frontend Developer" twitter="murcielaguito" avatar="https://es.gravatar.com/avatar?d=identicon"/> , container);

ReactDOM.render(<App/>, container)
