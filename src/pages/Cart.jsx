import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

const Content = styled.div`
max-width: 1100px;
margin-inline: auto;
`;
const Container = styled.div`
display: flex;
gap: 10px;
align-items: center;
padding-bottom: 12px;
`
const Delete = styled.button`
background-color: red;
font-size: 16px;
padding: 2px 8px;
color: white;
border: none;
border-radius: 5px;`


const List = ({title, price, quantity}) =>{
    return(
        <Container>
            <Delete>-</Delete>
            <span>{quantity}</span>
            <span>x</span>
            <span>{price}</span>
            <span>{title}</span>
        </Container>
    )
}
const ListItems = ({items}) =>{
    return(
        <>
            {items.map((item, index) => <li key={index}><List title = {item.item.title} price={item.item.price} quantity ={item.quantity}/></li>)}
        </>
    )
}
const Cart = () =>{
    const [cart, setCart] = useOutletContext();
    
    const [total, setTotal] = useState(0);



      useEffect(() =>{
        const handleTotal = () => {
            const { items } = cart;
            let newTotal = 0;
            items.forEach((item) => {
              newTotal += item.item.price * item.quantity;
            });
            setTotal(newTotal);
          };

          handleTotal();
      }, [cart])

      const plotTotal = ()=>{
        console.log(total);
      }

      const Cart = () => {
        return(
        
            <Content>
                <h1>Welcome {cart.name}, this is to your bag</h1>
                <Link to="/store">Continue Shopping</Link>
                <ul>
                {cart.items.length > 0 ? <ListItems items ={cart.items}/> : <p>Your cart is empty</p>}
                </ul>
                <p>${total.toFixed(2)}</p>
                <button onClick={plotTotal}>Checkout</button>
            </Content>
        )
      }
    return(
        <>
            <Cart /> 
        </>
  
    )
}

export default Cart;