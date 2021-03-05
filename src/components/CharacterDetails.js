import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const CharacterDetails = props => {
    if (props.character === undefined) {
        return (
            <div className="page">
                <Header />
                <main className="cardMain">
                    <Link to="/">
                        <span className="link">Go Back</span>
                    </Link>
                    <section className="card">
                        <div className="card__message">
                            There is no character that matches the word XXX</div>
                    </section>
                </main>
            </div>
        )
    } else {
        return (
            <div className="page">
                <Header />
                <main className="cardMain">
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
                                <li className="list__point">Episodes: {props.character.episode}</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default CharacterDetails;