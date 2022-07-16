import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
width: ${(props) => props.type !== "sm" && "270px"};;
margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};;
cursor: pointer;
display: ${(props) => props.type === "sm" && "flex"};
gap: 10px;
`;

const Image = styled.img`
width: 100%;
height: ${(props) => props.type === "sm" ? "120px" : "202px"};
background-color: #999;
flex: 1;
`;

const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap: 12px;
flex: 1;
`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 9px 0px
`;

const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to = "/video/test" style={{textDecoration: "none"}}>
    <Container type = {type}>
        <Image type = {type} src = "https://i.ytimg.com/an_webp/lmUgUetQBk8/mqdefault_6s.webp?du=3000&sqp=CK6XwZYG&rs=AOn4CLBfoomN1Sgb3UUOLrcsRoBdA-hIHQ"/>
        <Details type = {type} >
            <ChannelImage type = {type} src = "https://yt3.ggpht.com/ytc/AKedOLTW6l4zXdS367F-2snlFbDAlSfDVA3ATcg_GniG=s88-c-k-c0x00ffffff-no-rj"/>
            <Texts>
              <Title>Magnus Carlsen vs Alireza Firouza</Title>
              <ChannelName>Chess Base India</ChannelName>
              <Info>1,000,000 views . 1 year ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card