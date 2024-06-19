import styled from "styled-components";

const StyledMovie = styled.div`
    margin-bottom: 1rem;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    h3 {
        color: #4361ee;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #64748b;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
    }

    @media screen and (min-width: 992px) {
        flex-basis: 25%;
        padding: 1rem;
    }
`;

function Movie(props) {
    const {image, title, year} = props;

    return (
        <StyledMovie>
            <img 
                src= {image}
                alt= {title}
                />
            <h3>{title}</h3>
            <p>{movie.year || movie.release_date}</p>
        </StyledMovie>
    );
}

export default Movie;