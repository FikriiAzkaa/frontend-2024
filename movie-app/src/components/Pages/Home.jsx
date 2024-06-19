import Hero from "../Hero/Hero";
import Movies from "../Movies/Movies";
import AddMovies from "../AddMovies/AddMovies";
import { useState } from "react";
import Footer from "../Footer/Footer";
import data from "../../utils/constants/data";
import AddMovieForm from "../../AddMovieForm/AddMovieForm";

function Home() {
  const [ movies, setMovies ] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;