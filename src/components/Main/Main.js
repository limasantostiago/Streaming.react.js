import './Main.css';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import axios from 'axios';
import { useState } from 'react';

const Main = () => {

  const [pokemonData, setPokemonData] = useState({});
  const [renderizarCard, setRenderizarCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nome = event.target[0].value;
    const url = 'https://pokeapi.co/api/v2/pokemon/' + nome.toLowerCase();

    axios.get(url)
      .then((response) => {
        setPokemonData(response.data)
        setRenderizarCard(true)
      })
      .catch((error) => {
        console.error('Pokemon não encontrado')
      })
  }

  return (
    <div className='loja de filmes'>
      <Navbar onSubmit={handleSubmit} />
      <div className='filmes'>
        {
          renderizarCard &&
            <Card 
              nome={pokemonData.name}
              imagem={pokemonData.sprites.front_default}
            />
          
        }
      </div>
    </div>
  )
}

export default Main;