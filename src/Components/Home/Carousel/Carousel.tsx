import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Items from './Items'
import {homeslider} from './homeslider'
function Example(){
 
    return (
        <Carousel sx={{ width: '100%', height: { sm: '510px', xs: "450px" }, textAlign: "center", backgroundColor:"primary.main" }}>
            {
                homeslider.map( (item:any) => <Items key={item.id} item={item} /> )
            }
        </Carousel>
    )
}


export default Example;