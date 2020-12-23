import React, {useState,useEffect} from 'react';
import {
  Grid,
} from '@material-ui/core';
import getDataJson from '../../services/pokeService';
import CardPokeComponent from './CardPokeComponent';

const ListPokeComponent = () => {
  const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokeList, setPokeList] = useState([{"id" : "sadsad"}]);
  const [loading,setLoading] = useState(true);

  

  const loadingIndividualsPokemons = async (data) => {
    let _pokemonData = await Promise.all(data.map( async pokemon => {
        let pokemonRecord = await getDataJson(pokemon.url);
          return pokemonRecord;
        }
      )
    );

    setPokeList(_pokemonData);;
  }

  useEffect( () => {
    async function fetchPokemons(){
      let response = await getDataJson(pokeApiUrl);
      await loadingIndividualsPokemons(response.results);
      console.log(pokeList);
      setLoading(false);
    }
    fetchPokemons();
  },[]);


  return (
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          
            {
                pokeList.map( (poke,index) => ( <CardPokeComponent key={index} pokemon={poke}></CardPokeComponent> )  )
            }

        </Grid>
  );
};

export default ListPokeComponent;