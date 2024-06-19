import { useState, useEffect } from "react";
import Button from "../Button";
import styled from "styled-components";



const StyledHero = styled.div`
    margin: 1rem;
  
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  div {
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  h3 {
    color: #0c010b;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  
  p {
    color: #000102;
    margin-bottom: 1rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }
  
    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    div {
      flex-basis: 40%;
    }
  
    div {
      flex-basis: 60%;
    }
  }



    
`;

function Hero() {

    const [movie, setMovie] = useState("");
useEffect(() => {
    async function fetchMovie() {
        const url ="https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        const response = await fetch(url);
        const data = await response.json();
        
        setMovie(data);
    }

    fetchMovie();
    }, []);

         
    return (
        <StyledHero>
            <section >
                <div>
                    <h2>{movie.Title}</h2>
                    <h3>
                        Genre: {movie.Genre}
                    </h3>
                    <p>
                        {movie.Plot}
                    </p>
                    <Button variant="primary" full>Watch Movie</Button>
                </div>
                
                    <img src={movie.Poster} alt={movie.Title} />
                
            </section>
        </StyledHero>
    );
}
export default Hero;