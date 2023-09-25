import React, { useState } from 'react';
import Types from './Types';
import Stats from './Stats';
import { AiFillLike } from "react-icons/ai";
import FavPoke from './FavPoke';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function InfoPoke({ pokeDex }) {

    const [fav, setFav] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const MySwal = withReactContent(Swal)

    const addFav = () => {
        setFav((oldState => [...oldState, pokeDex]))
        MySwal.fire({
            html: <i>{`Added ${pokeDex.name} to favorites successfully!`}</i>,
            icon: 'success'
        })
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    console.log("Your Faverite Pokemon", fav)
    return (
        <>
            <div className="flex fixed justify-center">
                <div className='fixed top-28 right-80 mt-6 pe-12 flex justify-center'>
                    <button
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={openModal}
                    >
                        Your Faverite Pokemon
                    </button>
                </div>
                {!pokeDex ? (
                    <div className="ms-80 mt-40 text-xl font-bold">
                        <h3>No Pokemon selected</h3>
                    </div>
                ) : (
                    <div>
                        <button onClick={addFav} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-12 mx-20 flex'>
                            <span className="mr-1">Add to favorite</span>
                            <AiFillLike />
                        </button>                        
                        <h1 className="text-center text-3xl mb-7 font-bold">{pokeDex.name}</h1>
                        <img
                            className="w-40 mx-auto my-10 bg-amber-200 p-3 rounded-xl shadow-xl cursor-pointer hover:bg-amber-300"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`}
                            alt=""
                        />
                        <div className="flex justify-center my-5">
                            {pokeDex.types?.map((type, idx) => (
                                <Types key={idx} type={type} />
                            ))}
                        </div>
                        <div className="flex justify-center">
                            {pokeDex.abilities.map((poke, idx) => {
                                return (
                                    <div key={idx}>
                                        <h2 className="bg-red-500 mx-2 my-3 p-3 rounded-lg hover:bg-red-300 text-white cursor-pointer">
                                            {poke.ability.name}
                                        </h2>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-lg text-center mt-3">
                            <div className='me-4'>
                                <h3>Base Experience : {pokeDex.base_experience}</h3>
                                <h3>Weight : {pokeDex.weight}</h3>
                                <h3>Height : {pokeDex.height}</h3>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {pokeDex.stats.map((poke, idx) => {
                                return (
                                    <div className="flex items-center justify-center mx-4 my-5" key={idx}>
                                        <Stats stats={poke} /> : {poke.base_stat}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <FavPoke isOpen={isModalOpen} closeModal={closeModal} fav={fav} />
            </div>
        </>

    );
}

export default InfoPoke;
