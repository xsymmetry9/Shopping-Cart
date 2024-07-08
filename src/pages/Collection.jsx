import React from 'react';
import Carousel from "../components/Carousel/Carousel";

const PlotMenCollection = (props) =>{
    const {items, status, style} = props

    return(
        <>
            <Carousel 
                items={items} 
                status ={status} 
                style={style}/>
        </>
    )
}

export default PlotMenCollection;