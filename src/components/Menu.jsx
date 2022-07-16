import React from 'react'
import styled from "styled-components";
import MyTube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
flex: 1;
background-color: ${({theme}) => theme.bgLighter};
height: 100vh;
color: ${({theme}) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 1px;
font-weight: bold;
margin-bottom: 25px;
`;

const Img = styled.img`
height: 25px;
`

const Item = styled.div`
display:flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 5.5px 0px;

&:hover {
  background-color : ${({theme}) => theme.soft};
}
`;



const Hr = styled.div`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div`
`;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;
const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to = "/" style={{textDecoration: "none", color: "inherit"}}>
          <Logo>
            <Img src = {MyTube}/>
            MyTube
          </Logo>
          </Link>
          <Item>
            <HomeIcon/>
            Home
          </Item>
          <Item>
            <ExploreIcon/>
            Explore
          </Item>
          <Item>
            <SubscriptionsIcon/>
            Subscriptions
          </Item>
          <Hr/>
          <Item>
            <VideoLibraryIcon/>
            Library
          </Item>
          <Item>
            <HistoryIcon/>
            History
          </Item>
          <Hr/>
          <Login>
            Sign in to like videos, comment and subscribe.
            <Link to = "signin" style = {{textDecoration: "none"}}>
            <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
            </Link>
          </Login>
          <Hr/>
          <Item>
            <SmartDisplayIcon/>
            Your videos
          </Item>
          <Item>
            <WatchLaterIcon/>
            Watch later
          </Item>
          <Item>
            <ThumbUpOutlinedIcon/>
            Liked videos
          </Item>
          <Hr/>
          <Item>
            <SettingsIcon/>
            Settings
          </Item>
          <Item>
            <FlagIcon/>
            Report
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon/>
            Help
          </Item>
          <Item onClick = {()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon/>
            {darkMode ? "Light" : "Dark"} Mode
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu