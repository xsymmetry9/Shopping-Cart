import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import Header from "../HeaderAndFooter/Header";
import Footer from "../HeaderAndFooter/Footer";
import RenderImage from '../components/Image/RenderImage';
import styled from 'styled-components';

const Container = styled.div`
max-width: 1100px;
padding: 3rem 0;
margin-inline: auto;
display: grid;


grid-template-columns: 1fr 1fr;
`

const Wrapper = styled.div`
`
const ProductDetail = () =>{
    const [state, setState] = useState({items: [], status: "loading"});
    const {id} = useParams();


    useEffect(() => {
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setState({items: response, status: "loaded"}))
        .catch((error) => {
          console.log("error", error);
          setState({items: [], status: "error"});
        })
    }, []);

    const item = state.items.find((item) => item.id === parseInt(id));

    console.log(item);

  
    return(
        <>
            <Header />
            {state.status === "loading" ? <Loading /> : (
                <Container>
                    <RenderImage item={item} style={`image-size-${"large"}`} />
                    <Wrapper>
                        <h1>{item.title}</h1>
                        <p>${item.price.toFixed(2)}</p>
                        <p>{item.description}</p>
                        <button>Add to Cart</button>
                        <Link to="/">go back to store</Link>

                    </Wrapper>
       
                </Container>
          
            )}
            <Footer/>
        </>
    )
}

export default ProductDetail;