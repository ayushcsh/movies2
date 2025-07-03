import { createContext , useContext , useState , useEffect } from "react";

const Moviecontext = createContext();

export const useMoviecontext = ()=> useContext(Moviecontext);

export const Movieprovider = ({children})=>{
    // we are creating a favlist of movies
    const [favorites, setfavorites] = useState([]);
    
    // we make a local storage to save our all fav movies data 
    useEffect(() => {
        const storedfavs = localStorage.getItem("favorites");
        // if storedfavs is not empty so we parse the json item and setfavmovies and display it 
        if (storedfavs) setfavorites(JSON.parse(storedfavs));
    }, []);

    // this useEffect is for setting the fav whenever the fav list changes, it saves in the localStorage 
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // we just add favmovies here whenever the liked button is hit so this function is called 
    const addtofav = (movie) => {
        setfavorites(prev => [...prev, movie]);
    }

    // remove a movie from favorites by id
    const removefav = (movieid) => {
        setfavorites(prev => prev.filter(movie => movie.id !== movieid));
    }

    // check if a movie is in favorites
    const isfavorite = (movieid) => {
        return favorites.some(movie => movie.id === movieid);
    }

    const values = {
        favorites,
        addtofav,
        removefav,
        isfavorite
    }

    return <Moviecontext.Provider value ={values}>

        {children}
    </Moviecontext.Provider>
    



}
