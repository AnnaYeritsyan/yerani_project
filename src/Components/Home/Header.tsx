import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import carusel1 from '../../accets/Img/naturale.png'
import newproductButton from '../../accets/Img/np.svg'
import Navbar from "../Navbar/Navbar";
import { theme } from '../theme'
// import Carousel from "react-material-ui-carousel";
import Carousel from './Carousel/Carousel'
import { commondFlex, styleLink } from "../style";
// import Carousel from "react-material-ui-carousel";
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  

    return (
        <>
            <Navbar />

            <Box bgcolor={'primary.main'} sx={{ height: { sm: '656px', xs: "458px" }, width: "100%", ...commondFlex, alignItems: "center" }}>
                <Box sx={{ width: '100%', height: { sm: '656px', xs: "458px" }, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {/* <Carousel sx={{ width: '100%', height: { sm: '510px', xs: "450px" }, textAlign: "center" }}>
                        <img src={carusel1} height="460px" width='55%' />
                        <img src={carusel1} width='55%' height="460px" />
                        <img src={carusel1} width='55%' height="460px" />
                    </Carousel> */}
                    <Carousel/>
<Box sx={{position: "absolute",
                        zIndex: "1",
                  
                        width:{md:'50%', sm:'70%', xs:'70%'},
                        // border: "1px solid black",
                        display: "flex",
                        flexDirection: "column-reverse",

                        height:{lg:'180px',md:'160px', sm:'200px', xs:'250px'}
                      
                        }}>


                    {/* <img src={newproductButton} width="200px" onClick={newproducts} style={{cursor:"pointer"}} /> */}

</Box>
                </Box>
            </Box>

        </>
    );
};
export default Header;