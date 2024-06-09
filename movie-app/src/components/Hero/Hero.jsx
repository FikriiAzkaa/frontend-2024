import { useState, useEffect } from "react";
import Button from "../Button";
import styled from "styled-components";



const StyledHero = styled.div`
    margin: 1rem;
    margin-bottom: 1rem;
    flex-basis: 60%
    flex-basis: 40%
    
    section{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    h2{
        color: #4361ee;
        font-size: 2.44rem;
        margin-bottom: 1rem;
    }

    h3{
        color: #b5179e;
        font-size: 1.59rem;
        margin-bottom: 1rem;
    }

    p{
        color: #64748b;
        margin-bottom: 1rem;
    }


    img{
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
    }

    @media screen and (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
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
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    );
}
export default Hero;