const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            return data.results.map(character => {
                return {
                    id: character.id,
                    name: character.name,
                    species: character.species,
                    image: character.image,
                    planet: character.origin.name,
                    episode: character.episode,
                    status: character.status,
                    type: character.type,
                }
            })
        })
}

export default getDataFromApi;