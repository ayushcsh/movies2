import React, { useState , useEffect} from 'react'
import Card from './card.jsx'
import { fetchmovies , searchmovies} from  './api.js'






const home = () => {
  
  const[searchquery , setsearchquery] = useState("");
  const[movies , setmovies] = useState([]);
  const[loading , setloading] = useState(true);
  const[error , seterror] = useState(null);

  useEffect(()=>{
    const loadpopularmovies = async()=>{
      try{
        const popularmovies = await fetchmovies();
        setmovies(popularmovies);
      }
      catch(error){
        console.log(error);
        seterror("failde to fetch movies");

      }
      finally{
        setloading(false);
      }
    }

    loadpopularmovies();
  },[])

  const handlesearch = async(e)=>{
    e.preventDefault();
    if(!searchquery.trim()) return;
    if(loading) return;
    
    setloading(true);
    try{
      const searchresult = await searchmovies(searchquery);
      setmovies(searchresult);
      seterror(null);
    }catch(error){
      console.log("error");
      seterror("sorry we failed");
    }
    finally{
      setloading(false)
    }
  }
  return (
    <>
    <form onSubmit={handlesearch} className='mx-auto w-1/2 flex justify-center items-center'>
      <input type = "text" placeholder='Search for movies...' className='search-input m-[20px] pl-4 bg-white w-[300px] h-[40px]  rounded ' value = {searchquery} onChange={(e) =>{
        setsearchquery(e.target.value);
      }}/>
      <button type = "submit" className = 'search-btn bg-red-800 w-[100px] h-[40px] text-white rounded sm:w-[120px] text-lg '>Search</button>

    </form>
    <div className='movies-grid ml-[40px] flex flex-wrap justify-center items-center gap-8'>
      
        {movies.map((movie)=> 
          // movie.tittle.toLocaleLowerCase().startsWith(searchquery.toLocaleLowerCase()) && 
          <Card movie = {movie} key = {movie.id}/>)}

    </div>
    </>
  )
}

export default home
