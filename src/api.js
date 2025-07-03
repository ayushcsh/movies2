const API_KEY = "a5b6a559c110105058fdac9e8f883966";
const API_URL = "https://api.themoviedb.org/3";

export const fetchmovies = async () =>{
     const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
     const data = await response.json();
     return data.results;
}

export const searchmovies = async(query)=>{
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
}