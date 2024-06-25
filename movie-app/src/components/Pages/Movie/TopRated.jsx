import { useEffect } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies"
import Hero from "../../Hero/Hero";
import ENDPOINTS from "../../../utils/constants/endpoints";

     function TopRatedMovie() {
;
      
      const [movies, setMovies] = useState([]);

      useEffect(()=> {
         TopRatedMovies();
      }, []);

         async function TopRatedMovies() {
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

        export default TopRatedMovie;