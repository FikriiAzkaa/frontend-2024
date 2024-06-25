import { useEffect } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies"
import Hero from "../../Hero/Hero";
import ENDPOINTS from "../../../utils/constants/endpoints";

     function NowPlayingMovie() {
      
      const [movies, setMovies] = useState([]);

      useEffect(()=> {
         getNowPlayingMovies();
      }, []);

         async function getNowPlayingMovies() {
            const response = await axios(ENDPOINTS.TOPRATED);
            setMovies(response.data.results);
         }
      
      
         return (
            <>
                <Hero/>
               <Movies movies={movies} />
            </>
               );
           };

        export default NowPlayingMovie;