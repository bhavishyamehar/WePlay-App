import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card';
const Container = styled.div`
display: flex;
gap: 24px;
`;
const Content = styled.div`
flex: 5;
`;
const Recommendation = styled.div`
flex: 2;
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme}) => theme.text};
`
const ChannelName = styled.span`
font-weight: 500;
`
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
font-size: 12px;
color: ${({theme}) => theme.textSoft};
`
const Description = styled.p`
font-size: 14px;
`
const Subscribe = styled.button`
background-color: #cc1a00;
color: white;
font-weight: 500;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme}) => theme.text};
`;

const Details = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`;

const Info = styled.span`
color: ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
display:flex;
gap: 20px;
color: ${({theme}) => theme.text};
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`;




const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe 
                width="100%"
                height="550"
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </VideoWrapper>
            <Title>Magnus Carlsen vs Alireza Firouza</Title>
            <Details>
                <Info>1,000,000 views . Jun 21, 2021</Info>
                <Buttons>
                    <Button><ThumbUpAltOutlinedIcon/> 80k</Button>
                    <Button><ThumbDownOutlinedIcon/> DISLIKE</Button>
                    <Button><ShareOutlinedIcon/> SHARE</Button>
                    <Button><AddTaskOutlinedIcon/> SAVE</Button>
                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src = "https://yt3.ggpht.com/ytc/AKedOLTW6l4zXdS367F-2snlFbDAlSfDVA3ATcg_GniG=s88-c-k-c0x00ffffff-no-rj"/>
                    <ChannelDetail>
                        <ChannelName>CHESS BASE INDIA</ChannelName>
                        <ChannelCounter>600K subscribers</ChannelCounter>
                        <Description>This channels focuses on cool chess tricks and also presents and Analyse some very cool games played by top players in world.</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr/>
            <Comments/>
        </Content>
        <Recommendation>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            <Card type = "sm"/>
            
        </Recommendation>
    </Container>
  )
}

export default Video