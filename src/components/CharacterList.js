import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const characterElements = props.characters.map(character => {
        return <li key={character.id} className="list__element">
            <CharacterCard character={character} />
        </li>
    })

    return (
        <section className="main__cards">
            <ul className="list">
                {characterElements}
            </ul>
        </section>
    )
}

export default CharacterList;