import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button<{ $primary?: boolean; }>`
/* Adapt the colors based on primary prop */

background: ${props => props.$primary ? "red" : "white"};
color: ${props => props.$primary ? "white" : "red"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 3px;
`;

const Button = (props) => {
    return(
            <>
                {props.style == "primary" ? (
                    <StyledButton $primary onClick={props.handle}>{props.title}</StyledButton> ) : (
                    <StyledButton onClick={props.handle}>{props.title}</StyledButton>
                    )
                }
            </>
    )
}

export default Button;