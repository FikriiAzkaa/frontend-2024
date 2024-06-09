import styled, { css } from "styled-components";



const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #436lee;
    cursor: pointer;

    background-color: ${({ variant, theme }) =>theme.colors[variant] || theme.colors};

    ${(props) => 
    props.full && css`
    display: block;
    width: 100%; 
    `}

    `;



export default Button;

