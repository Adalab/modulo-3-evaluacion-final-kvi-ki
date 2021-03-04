import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <Link to={`/character/${props.character.id}`}>
            <img src={props.character.image} className="list__element--image" alt={`Photo of ${props.character.name}`} />
            <h4 className="list__element--name">{props.character.name}</h4>
            <p className="list__element--text">{props.character.species}</p>
        </Link>
    )
}

export default CharacterCard;