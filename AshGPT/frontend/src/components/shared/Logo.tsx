import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Logo() {
     return (
       <div style={{
         display: "flex",
         alignItems: "center",
         gap: "15px",
       }}>
         <img src='AshGPT.png' 
              alt="openai"
              width={"30px"}
              height={"30px"}
              className='image-inverted' 
         />
         <Typography sx={{diaplay: {md:"block", sm:"none", xs:"none"},
           mr: "auto",
           fontWeight: "800",
           textShadow: "2px 2px 20px #000",
           fontSize: "16px"
         }}>
           <span style={{fontSize: "22px"}}>ASH</span>-GPT
         </Typography>
       </div>
     )
   }



export default Logo
