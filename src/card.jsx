import React from 'react'
import { useMoviecontext } from './moviecontext';



const Card = ({ movie }) => {
    const { isfavorite, addtofav, removefav } = useMoviecontext();
    const favorites = isfavorite(movie.id);

    function onfav(e) {
        e.preventDefault();
        if(favorites) removefav(movie.id);
        else addtofav(movie)
    }
    return (
        <div>
            <div className="moviecard   bg-[rgb(46,46,46)] group sm: mr-[35px]">
                <div className="movie-poster w-[300px] h-[400px]">
                    <img className='  hii ' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay ml-[250px] transform translate-y-[-436px] z-50 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                        <div className="circle bg-white w-[30px] h-[30px] flex rounded-full justify-center items-center ">
                            <button
                                className={`fav-btn ${favorites ? 'bg-red-600 text-white w-[30px] h-[30px] flex rounded-full justify-center items-center ' : ''}`}
                                onClick={onfav}
                            >
                                ❤︎
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-info ml-[20px] mb-[20px]">
                    <h3 className='text-white'>{movie.title}</h3>
                    <p className='text-gray-400'>{movie.release_date}</p>
                </div>
            </div>

        </div >
    )
}

export default Card
