import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import Filter from './Filter';
import Header from './Header';
import getDataFromApi from '../services/getDataFromApi';


function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getDataFromApi().then(data =>
      setCharacters(data));
  }, []);

  const handleFilter = (searchField) => {
    if (searchField.key === 'name')
      return setName(searchField.value);
  }

  const FilterCharacters = characters.filter(character => {
    return character.name.toUpperCase().includes(name.toUpperCase())
  })

  const renderCharacterDetails = props => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find(character => {
      return character.id === id;
    })
    return <CharacterDetails character={selectCharacter} />
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className="page">
          <Header />
          <main className="main">
            <Filter handleFilter={handleFilter} />
            <CharacterList characters={FilterCharacters} name={name} character={characters} />
          </main>
        </div>
      </Route>
      <Route path="/character/:id" render={renderCharacterDetails} />
    </Switch >
  );
}

export default App;
