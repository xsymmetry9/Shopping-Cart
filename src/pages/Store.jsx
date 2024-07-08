import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collection from "./Collection";


const Section = styled.section`
display: grid;
justify-content: center;
align-items: center;
background-color: white;
color: black;
height: 692px;
overflow: hidden;
border-bottom: 1px solid lightgray;
`;

const Store = () =>{
    return(
        <>
        <Header/>

            <h1>My store</h1>
            <Section>
            <Collection items = {men} status = {status} style={"small"} />
        </Section>
        <Section>
            <Collection items = {women} status = {status} style ={"small"} />
        </Section>
        <Section>
            <Collection items = {jewelery} status = {status} style ={"medium"}/>
        </Section>
        <Section>
            <Collection items = {electronics} status = {status} style = {"medium"} />
        </Section>

        <Footer/>

        
        </>
    )
}
export default Store;