import styled from 'styled-components';

export const Container = styled.div`
width: 55%;
height: auto;
margin: 0 auto;
position: relative;
` 
export const Profile = styled.div`
width: 100%;
height: 200px;
border: 1px solid #B9B9B9;
padding: 50px 0px 0px 0px;
line-height: 140px;
`
export const backgroundBox = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 80%;
`

export const FeedContainer = styled.div`
    width: 100%;
    height: 400px;
    border: 1px solid #B9B9B9;
`

export const ProfileImg = styled.div`
    width: 150px;
    height: 150px;
    display: inline-block;
    float: left;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 3px hsl(0, 0%, 0%, 0.13);
    overflow: hidden;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const UserName = styled.span`
    color: #707070;
    font-size: 30px;
    vertical-align: middle;
    margin-left: 30px;
`
export const Email = styled(UserName)`
    font-size: 30px;
    margin-left: 5px;
`

export const ProfileData = styled.div`
    marign: 10px;
`
export const Listen = styled.div`
    margin:  ${props => props.list ? '10px 0px 0px 20px' : '20px 0px 0px 10px'};  
`
export const Listening = styled.span`
    color: #707070;
    font-size: ${props => props.listen ? '15px' : '23px'};
    margin: ${props => props.listen ? '0px 15px 0px 0px' : '0px 20px 0px 30px'};
`

export const Listener = styled(Listening)`
    margin-left: 8px;
`