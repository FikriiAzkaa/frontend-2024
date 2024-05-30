import Hero from "../Hero/Hero";
import Movies from "../Movies/Movies";
import AddMovies from "../AddMovies/AddMovies";
import { useState } from "react";
import Footer from "../Footer/Footer";
import data from "../../utils/constants/data";

function Home() {
  const [ movies, setMovies ] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;