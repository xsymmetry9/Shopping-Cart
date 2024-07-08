import styled from "styled-components";
import React from 'react';
import RenderImage from "../Image/RenderImage";

const Wrapper = styled.div`
    width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const TitlePriceWrapper = styled.div`
    margin-top: 1em;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 600;
    color: #333;
    margin: 0.5em 0;
`;

const Price = styled.p`
    font-size: 1.1em;
    color: #007bff;
    font-weight: 500;
`;

const Card = (props) => {
    const { item, style } = props;
    return (
        <Wrapper>
                <RenderImage item={item} style={`image-size-${style}`} />
                <TitlePriceWrapper>
                    <Title>{item.title}</Title>
                    <Price>${item.price}</Price>
                </TitlePriceWrapper>      
        </Wrapper>
    );
};

export default Card;
