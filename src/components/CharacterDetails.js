import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const CharacterDetails = props => {
    const episodesList = props.character.episode;
    let result = episodesList.length;

    return (
        <div className="cardPage">
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
                            <li className="list__point">Episodes: {result}</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CharacterDetails;