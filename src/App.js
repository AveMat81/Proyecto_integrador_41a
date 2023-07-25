import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx"
import { useState } from 'react';
import axios from 'axios';



const App = () => {
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };
   const [characters, setCharacters] = useState([])
   // const onSearch = () => {
   //    steCharacters([...characters, example])
   // };
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(() => {}))
   }
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} />         
      </div>
   );
}

export default App;
