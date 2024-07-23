import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Collection from "./Collection";
import Heading from "../components/Heading/Heading";

const Section = styled.section`

border-bottom: 1px solid lightgray;
`;

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3rem 0;
gap: 12px;
`

const Content = styled.div`

`
const Store = () =>{
    const [cart, setCart] = useOutletContext()
    const data = useLoaderData();
    const men =[];
    const women = [];
    const jewelery = [];
    const electronics = [];
    data.forEach((item) =>{
        item.category === "men's clothing" ? men.push(item) : 
            item.category === "women's clothing" ? women.push(item) :
            item.category === "electronics" ? electronics.push(item) :
            item.category === "jewelery" ? jewelery.push(item) : false;
    });

    const addHandle = (item, quantity) => {
        setCart((prevCart) => ({
                    ...prevCart,
                    items: [...prevCart.items, { item, quantity }]
                }))
             
    };


    return(
        <>
            <Content>
                <Heading title={"my store"} headingType={"h1"}/>
                <Section>
                    <ContentWrapper>
                        <Heading title={"Men's collection"} headingType={"h2"}/>
                        <Collection items = {men} user={cart} style={"medium"} link={"store"} handle = {addHandle}/>
                    </ContentWrapper>
             
                </Section>
                <Section>
                    <ContentWrapper>
                        <Heading title={"Women's collection"} headingType={"h2"}/>
                        <Collection items = {women} user={cart} style ={"medium"} link={"store"} handle = {addHandle} />
                    </ContentWrapper>
        
                </Section>
                <Section>
                    <ContentWrapper>
                        <Heading title={"Jewelry Collection"} headingType={"h2"}/>
                        <Collection items = {jewelery} user={cart} style ={"medium"} link={"store"} handle = {addHandle}/>
                    </ContentWrapper>
          
                </Section>
                <Section>
                    <ContentWrapper>
                        <Heading title={"Electronic Collection"} headingType={"h2"}/>
                        <Collection items = {electronics} user={cart} style = {"medium"} link={"store"} handle = {addHandle}/>
                    </ContentWrapper>
  
                </Section>
            </Content>
                   
    
        </>
    )
}
export default Store;