import React from 'react'
import { useMoviecontext } from './moviecontext'
import Card from './card'

const favorites = () => {
  const {favorites} = useMoviecontext();
  
  if(favorites){

    return (
    <div> 
      <h2 className=' flex justify-center items-center text-[30px] text-white mt-[20px] mb-[10px] font-bold'> Your Favourites</h2>
    <div className='movies-grid ml-[40px] flex flex-wrap justify-center items-center gap-8'>
      
        {favorites.map((movie)=> 
          // movie.tittle.toLocaleLowerCase().startsWith(searchquery.toLocaleLowerCase()) && 
          <Card movie = {movie} key = {movie.id}/>)}

    </div>
    </div>
    )
  }
  else
  return (
    <div className='justify-center items-center flex flex-col m-[250px] ml-[180px] '>
      <h1 className='text-white text-[50px] font-bold'>No favorites movies yet</h1>
        <p className='text-gray-400 text-[20px]'>Add some movies to your favorites list!</p>
    </div>
  )
}

export default favorites
