import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data"; 
import { useState } from "react"; 

function Movies() {
    const [movies, setMovies] = useState(data);

    function handleClick() {
        const newMovies = {
         id: "tt1087268457",
        title: "Spider-Man",
        year: "2021",
         type: "Movie",
         poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
        }

        setMovies([...movies, newMovies])
    }
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>latest Movie</h2>
                <div className={styles.movie__container}>
                    {}
                    {movies.map((movie) => {
                        return <Movie key={movie.id} 
                        image={movie.poster}
                        title={movie.title}
                        year={movie.year}
                        movie={movie} />
                    })}
                    <button onClick={handleClick}>Add Movie</button>
                </div>
            </section>
        </div>
        
    );
}

export default Movies;