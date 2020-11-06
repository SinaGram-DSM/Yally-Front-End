import styled from 'styled-components';

export const mainSection = styled.section`
    width: 100%;
    margin-top: 30px;
`
export const profileSection = styled.section`
    width: 100%;
    height: 230px; 
    padding-top:  40px;
    text-align: center;
    
`
export const profileImg = styled.img`
    width: 130px;
    height: 130px;
    border: none;
    border-radius: 100%;
`

export const comment = styled.p`
    font-size: 25px;
    color: #707070;
    margin-top: 20px;
`

export const listenSection = styled.section`
    width: 100%;
    padding-top: 20px;
    display: flex; 
    justify-content : space-between;
    flex-wrap: wrap;
`

export const containerBox = styled.div`
    box-shadow: 0 0 6px #00000010;
    background-color: #ffffff;
    width: 47%;
    height: 200px;
    margin-bottom: 50px; 
`

export const itemBox = styled.div`
    margin: 0px 35px 0px 35px;
    display: flex;
    align-items: center;
    height: 90px;
    border-bottom: 1px solid #EFEFEF;
    padding-top: 25px;
`

export const boxImg = styled(profileImg)`
    width: 70px;
    height: 70px;
    background-color: #D181B7;
`
export const userBox = styled.div`
`

export const name = styled.span`
    margin-left: 20px;
    color: #707070;
    font-size: 23px;
 `

export const listenBtn = styled.button`
    width: 80px;
    height: 35px;
    background-color: #6665E7;
    color: white;
    float: right;
    outline: none;
    border: none;
    border-radius: 100px;
    margin: 20px 40px 0px 0px;
    &:hover{
        border: 1.5px solid white;
    }
`


export const unlistenBtn = styled(listenBtn)`
    background-color: #333393;

`