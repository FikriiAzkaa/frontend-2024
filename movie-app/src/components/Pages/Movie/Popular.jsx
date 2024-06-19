import { useEffect } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies"
import Hero from "../../Hero/Hero";

     function Popular() {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      
      const [movies, setMovies] = useState([]);

      useEffect(()=> {
         getPopularMovies();
      }, []);

         async function getPopularMovies() {
            const response = await axios(URL);
            setMovies(response.data.results);
         }
 

         console.log(movies);

        return (
     <>
         <Hero/>
        <Movies movies={movies} />
      
     </>
        );
    };
        export default Popular;