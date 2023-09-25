import React from 'react'

function Card({ pokeData, loading, pokeDex }) {
  return (
    <div className="grid grid-cols-2 gap-4">
        {
            loading ?
            <img src="https://media.tenor.com/e6J4X97EZkIAAAAi/ash-now.gif" alt="loading" />
             :
            pokeData.map((item) =>{
                return(
               
                     <div key={item.id} onClick={()=>pokeDex(item)} className='flex max-w-sm px-6 py-8 bg-sky-300 border rounded-xl shadow hover:bg-sky-400 justify-center items-center cursor-pointer'>
                        <h2 className='text-xl me-5'>{item.id}</h2>
                        <img className='w-40' src={item.sprites.front_default} alt={item.name} />
                        <h3 className='text-2xl font-semi-bold'>{item.name} </h3>
                    </div>
                
                   
                )
            })
        }

    </div>
  )
}

export default Card