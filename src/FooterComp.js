import React, { Component } from 'react';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';

const FooterContainer = styled.div`
  text-align: center;s
  bottom:0;
  width: 100% !important;
  height: 100px !important ;
  background-color: black;
  color: white;
  font-size: 2rem;
  padding:2rem;
`;


const FooterComp = () =>{

  return(
    
    
    <FooterContainer>
    <Typography variant="title">Copyrights @2020.</Typography>
     </FooterContainer>
    

  )
}

export default FooterComp;