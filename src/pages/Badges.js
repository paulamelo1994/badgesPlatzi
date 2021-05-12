import React from 'react';

import BadgesList from '../components/BadgesList';

import '../styles/Badges.css';
import confLogo from '../images/badge-header.svg';

import { Link } from 'react-router-dom';

class Badges extends React.Component{


    constructor(props){
      super(props);
      console.log('1. constructor()'); //Se ejecuta primero el constructor al montar un componente


      //el constructor es el lugar recomendado para inicializar el state
      this.state = {
        data: [],
      };

    }

    componentDidMount(){
      console.log('3. componentDidMount()'); //tercer paso del ciclo de vida

      //se añade una promesa para incluir la data
      //Al cambiar la información inicial se vuelve a llamar a render()

      this.timeOutId = setTimeout(()=>{
        this.setState({
          data: [
            {
              id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
              firstName: 'Freda',
              lastName: 'Grady',
              email: 'Leann_Berge@gmail.com',
              jobTitle: 'Legacy Brand Director',
              twitter: 'FredaGrady22221-7573',
              avatarUrl:
                'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
              id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
              firstName: 'Major',
              lastName: 'Rodriguez',
              email: 'Ilene66@hotmail.com',
              jobTitle: 'Human Research Architect',
              twitter: 'MajorRodriguez61545',
              avatarUrl:
                'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
              id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
              firstName: 'Daphney',
              lastName: 'Torphy',
              email: 'Ron61@hotmail.com',
              jobTitle: 'National Markets Officer',
              twitter: 'DaphneyTorphy96105',
              avatarUrl:
                'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
          ],
        
        })
      }, 3000) 

    };

    componentDidUpdate(prevProps, prevState){
      //es llamado al actualizar el componente. Recibe los props y el state que teníamos antes de la actualización
      console.log('5. componentDidUpdate()');
      //imprimimos los valores anteriores y los actualizados.
      console.log({prevProps: prevProps, prevState: prevState});
      console.log({props: this.props, state: this.state});

    }

    componentWillUnmount(){
      //se ejecuta justo antes de que el componente salga del DOM
      console.log('6. componentWillUnmount()');

      //se limpia el timeout por si se desmonta el componente antes de tiempo.
      clearTimeout(this.timeOutId);
    }

    render(){
      console.log('2/4. render()') // se monta después del constructor (ejecución)

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