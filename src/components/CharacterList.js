import React from 'react';
import CharacterCard from './CharacterCard';
import Filter from './Filter';

const CharacterList = props => {
    console.log(props)
    if (props.characters.length === 0) {
        return (
            <section className="card">
                <div className="card__message">
                    There is no character that matches "{props.name}"!</div>
            </section>
        )
    }

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