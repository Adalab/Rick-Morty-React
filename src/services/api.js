const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const clearData = data.results.map((character) => {
        return {
          image: character.image,
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          gender: character.gender,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });

      return clearData;
    });
};

export default getApiData;
