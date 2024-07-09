import { useState, useEffect } from "react";
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collection from "./Collection";
import Heading from "../components/Heading/Heading";


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
    const [state, setState] = useState({items: [], status: "loading"});

    useEffect(() => {
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setState({items: response, status: "loaded"}))
        .catch((error) => {
          console.log("error", error);
          setState({items: [], status: "error"});
        })
    }, []);

    const men =[];
    const women = [];
    const jewelery = [];
    const electronics = [];

    state.items.forEach((item) =>{
        item.category === "men's clothing" ? men.push(item) : 
            item.category === "women's clothing" ? women.push(item) :
            item.category === "electronics" ? electronics.push(item) :
            item.category === "jewelery" ? jewelery.push(item) : false;
    });

  

    return(
        <>
        <Header/>

            <Heading title={"my store"} headingType={"h1"}/>
            <Section>
                <Heading title={"Men's collection"} headingType={"h2"}/>
                <Collection items = {men} status = {status} style={"medium"} link={"store"} />
        </Section>
        <Section>
            <Heading title={"Women's collection"} headingType={"h2"}/>

            <Collection items = {women} status = {status} style ={"medium"} link={"store"} />
        </Section>
        <Section>
            <Heading title={"Jewelry Collection"} headingType={"h2"}/>

            <Collection items = {jewelery} status = {status} style ={"medium"} link={"store"}/>
        </Section>
        <Section>
            <Heading title={"Electronic Collection"} headingType={"h2"}/>
            <Collection items = {electronics} status = {status} style = {"medium"} link={"store"}/>
        </Section>

        <Footer/>

        
        </>
    )
}
export default Store;