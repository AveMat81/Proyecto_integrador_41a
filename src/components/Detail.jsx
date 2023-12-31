import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = ()=>{
    const {id} = useParams()

    const [character, setCharacter]= useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h1>Soy DITAIL</h1>
            <h2>Name: {character.name && character.name}</h2>
            <img src={character.image && character.image} alt={character.name} />
            <h2>Status: {character.status && character.status}</h2>
            <h2>Specie: {character.species && character.species}</h2>
            <h2>Gender: {character.gender && character.gender}</h2>
            <h2>Origin: {character.origin?.name && character.origin?.name}</h2>
            {/* el ? es un conditional chaining  */}
        </div>
    )
}

export default Detail;