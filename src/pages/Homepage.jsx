import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Collection from "./Collection";

const Section = styled.section`
display: grid;
justify-content: center;
align-items: center;
background-color: white;
color: black;
height: 692px;
`;
const Banner = styled.section`
display: grid;
justify-content: center;
align-items: center;
background-color: white;
color: black;
height: 692px;
overflow: hidden;
border-bottom: 1px solid lightgray;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1100px;
width: 100%;
`

const Heading = styled.h2`
color: inherit;
font-size: 56px;
margin: 0;
`
const Paragraph = styled.p`
color: inherit;
font-size: 28px;
margin: 0;
margin-top: 6px;
`
const Button = styled.button`
background-color: rgb(0, 113, 227);
color: white;
padding: 11px 21px;
font-size: 17px;
text-align: center;
border: none;
border-radius: 980px;
`
const CTAWrapper = styled.div`
margin: 19px;
`
const StyledLink = styled(Link)`
text-decoration: none;
font-size: 17px;
color: white;
background-color: rgb(0, 113, 227);
padding: 11px 21px;
text-align: center;
border-radius: 980px;

`
const Homepage = () =>{

    return(
        <>
        <Banner>
            <Wrapper>
                <Heading>Our Collection</Heading>
                <Paragraph>Beautifully Designed. Carefully made for you.</Paragraph>
                <CTAWrapper>
                    <StyledLink to="/store">Explore more</StyledLink>
                </CTAWrapper>
            </Wrapper>
        </Banner>

 

        </>
    )
}

export default Homepage;