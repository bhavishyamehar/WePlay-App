import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({ theme }) => theme.text}
`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
        <Avatar src = "https://yt3.ggpht.com/ytc/AKedOLTW6l4zXdS367F-2snlFbDAlSfDVA3ATcg_GniG=s88-c-k-c0x00ffffff-no-rj"/>
        <Details>
            <Name>
                Premchand <Date>1 day ago</Date>
            </Name>
            <Text>
                This Video is amazing, please upload that quality Content.
            </Text>
        </Details>
    </Container>
  )
}

export default Comment