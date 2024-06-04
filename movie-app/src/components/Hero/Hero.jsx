import { useEffect, useState } from "react";

function Hero() {

    const [movie, setMovie] = useState(" ");

    useEffect(() => {
        async function fetcmovie() {
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

            const response = await fetch(url);
            const data = await response.json();
               
            return(
                    <section>
                        <div>
                            <h2>{movie.Title}</h2>
                            <h3>Genre: {movie.Genre}</h3>
                         </div>
                         <div>
                            <img src="{movie.Poster" alt="{movie.Title}" />
                         </div>
                    </section>
                )

            setMovie(data);
        }
        fetcmovie();
    }, [])
}


 


export default Hero;