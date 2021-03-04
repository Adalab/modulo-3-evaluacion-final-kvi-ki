import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const CharacterDetails = props => {
    if (props.character === undefined) {
        return (
            <div>Not found</div>);
        //       <div className="modal">
        //         <div className="modal__dialog">
        //           <div className="modal__content">
        //             <header className="modal__header">
        //               <h2 className="modal__title">Usuario no encontrado</h2>
        //               <Link to="/">
        //                 <span className="modal__close icon fas fa-times"></span>
        //               </Link>
        //             </header>
        //             <section>
        //               <p>Búscate la vida</p>
        //             </section>
        //           </div>
        //         </div>
        //       </div>
        //     );
    } else {
        return (
            <>
                <Header />
                <Link to="/">
                    <span className="link">Go Back</span>
                </Link>
                <section className="card">
                    <img src={props.character.image} className="card__image" />
                    <div className="card__details">
                        <h4 className="card__details--name">{props.character.name}</h4>
                        <ul className="card__details--list">
                            <li className="list__point">Status: {props.character.status}</li>
                            <li className="list__point">Species: {props.character.species}</li>
                            <li className="list__point">Origin: {props.character.planet}</li>
                            {/* <li className="list__point">Episodes: {props.character.episode}</li> */}
                        </ul>
                    </div>
                </section>
            </>


            // <div className="modal">
            //     <div className="modal__dialog">
            //         <div className="modal__content">
            //             <header className="modal__header">
            //                 <h2 className="modal__title">{props.user.name}</h2>
            //                 <Link to="/">
            //                     <span className="modal__close icon fas fa-times"></span>
            //                 </Link>
            //             </header>
            //             <section>
            //                 <img className="card__img" src="" alt="" />
            //                 <ul className="ml-1 mt-1">
            //                     <li>Género:{props.user.gender} </li>
            //                     <li>Email: {props.user.email}</li>
            //                     <li>Nick: {props.user.username}</li>
            //                     <li>Ciuda: {props.user.city}</li>
            //                     <li>País:{props.user.country}</li>
            //                 </ul>
            //             </section>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default CharacterDetails;