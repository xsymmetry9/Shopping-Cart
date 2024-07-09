import { Link } from "react-router-dom";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
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

const Homepage = (props) =>{
    const {items, status} = props;

    const men =[];
    const women = [];
    const jewelery = [];
    const electronics = [];

    items.forEach((item) =>{
        item.category === "men's clothing" ? men.push(item) : 
            item.category === "women's clothing" ? women.push(item) :
            item.category === "electronics" ? electronics.push(item) :
            item.category === "jewelery" ? jewelery.push(item) : false;
    })

    return(
        <>
        <Header/>
        <Banner>
            <Wrapper>
                <Heading>Our Collection</Heading>
                <Paragraph>Beautifully Designed. Carefully made for you.</Paragraph>
                <CTAWrapper>
                    <Link to="/store"><Button>Explore more</Button></Link>
                </CTAWrapper>
            </Wrapper>
        </Banner>
        <Section>
            <Collection items = {men} status = {status} style={"medium"} />
        </Section>
        <Section>
            <Collection items = {women} status = {status} style ={"medium"} />
        </Section>
        <Section>
            <Collection items = {jewelery} status = {status} style ={"medium"}/>
        </Section>
        <Section>
            <Collection items = {electronics} status = {status} style = {"medium"} />
        </Section>
        <Footer />

 

        </>
    )
}

export default Homepage;