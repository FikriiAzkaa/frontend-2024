
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`

    background-color: #4361ee;
    padding: 1rem;
    color: #fff;

    display: flex;
    flex-direction: column;

    .h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    .ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    .li {
        margin-bottom: 1rem;
    }

    .Link {
        color: #fff;
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        flex-direction: row;
        margin: 0 1rem;


    }

    @media screen and (min-width: 992px) {
        /* 
         * Nothing TODO HERE.
         * We haven't styling Navbar.
         */
    }

`;

function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <StyledNavbar>
                    <h1>Movie App</h1>
                </StyledNavbar>
                <StyledNavbar>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/">Add Movie</Link>
                        </li> 
                        <li>
                        <Link to="/">Popular</Link>   
                        </li>
                        <li>
                        <Link to="/">Now Playing</Link>
                        </li>
                        <li>
                        <Link to="/">Top Rated</Link>
                        </li>
                    </ul>
                </StyledNavbar>
            </nav>
        </StyledNavbar>
    );
}

export default Navbar;