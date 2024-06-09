import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #4361ee;
    color: #fff;
    padding: 1rem;
    text-align: center;

    h2{
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 1rem;
    }

    @media and (min-widht: 768px) {}
    
    @media and (min-widht: 992px) {}


`;

function Footer() {
    return (
        <StyledFooter>
            <footer>
                <h2>Movie App</h2>
                <p>Created by Azzzkaa</p>
            </footer>
        </StyledFooter>
    );
}

export default Footer;