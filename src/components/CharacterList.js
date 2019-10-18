import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components'


  // TODO: Add useState to track data from useEffect

   // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const Container = styled.div`
    margin-left: 37%;
    margin-top: 2%;
    padding-bottom: 4%;
    `;
const CharacterList = (props) => {
    const [characters, setCharacters] = useState([])

    const [search, setSearch] = useState('');
    const handleInputChange = event => {
      setSearch(event.target.value );
    };

    useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`, {
          params: {
            key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
          }
        })
        .then(res => {
          const characters = res.data.results.filter(character =>
            character.name.toLowerCase().includes(search.toLowerCase())
          );

          console.log("rick and morty characters", res.data);
          setCharacters(characters);
        });
    }, [search]);

    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log('character data:', res.data.results);
          setCharacters(res.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, [props.match.params.id]);

 if (!characters) {
    return <div>Loading character information...</div>;
  }

    return (
      <div>
       
        <Container>
      <section className = "search-form">
      <form >
        <input
          onChange = {handleInputChange}
          placeholder ='name'
          value = {search.name}
          name ='name'
        />

        <button className = "search-button">Search</button>
      </form>
      </section>
    </Container>
    <CharacterCard characterData={characters} />
      </div>
    );
}

export default CharacterList