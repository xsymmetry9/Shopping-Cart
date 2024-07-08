import styled from "styled-components";
import React from "react";

const Footer_primarySection = styled.div`

`
const ListContainer = styled.ul`
padding: 0;
margin: 0;
`

const Button = styled.button`
width: 100%;
text-align: left;
margin: 0;
padding: 12px 0;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
font-size: 1.2em`

const List = styled.li`
// padding: 8px 0;
// border-bottom: 1px solid #eee;
`
const Accordion = (props) =>{
    return (

        <Footer_primarySection>
            <Button>{props.title}</Button>
                <div id="expandable">
                    <ListContainer>
                        {props.items.map((item, index) => (
                            <List key ={index}>{item}</List>)
                        )}
                    </ListContainer>
                </div>
        </Footer_primarySection>
    )


}
export default Accordion;