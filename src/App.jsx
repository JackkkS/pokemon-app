import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Card from './components/Card';
import InfoPoke from './components/InfoPoke';
import SearchPoke from './components/SearchPoke';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [error, setError] = useState('');


  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPoke(res.data.results)
    setLoading(false)
  }

  const getPoke = async (res) => {
    const newPokeData = await Promise.all(res.map(async (item) => {
      const result = await axios.get(item.url);
      return result.data;
    }));
  
    setPokeData(newPokeData);
  };

  useEffect(() => {

    pokeFun();

  }, [url])
  
  const onSearch = (data, errorMessage) => {
    if (data) {
      setPokeData([data]);
    } else {
      setPokeData([]); 
      setError(errorMessage);
    }
  };

 
  console.log(pokeData)

  return (
    <div className='bg-amber-100 min-h-screen'>
      <div className='container mx-auto p-5'>
      <SearchPoke onSearch={onSearch} />
        <div className="grid grid-cols-2">
          <div>
            <Card pokeData={pokeData} loading={loading} pokeDex={poke => setPokeDex(poke)} />
            <div >
              <button 
              className="bg-red-500 mx-3 my-3 p-3 rounded-lg  text-white cursor-pointer"
              onClick={() => {
                setPokeData([])
                setUrl(prevUrl)
              }}>Previous</button>

              <button 
              className="bg-red-500 mx-3 my-3 p-3 rounded-lg text-white cursor-pointer"
              onClick={() => {
                setPokeData([])
                setUrl(nextUrl)
              }}>Next</button>

            </div>
          </div>
          <div >
            <InfoPoke  pokeDex={pokeDex}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
