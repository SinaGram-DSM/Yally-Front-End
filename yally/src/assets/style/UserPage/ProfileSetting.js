import styled from 'styled-components';

export const settingContainer =  styled.div`
    display: flex;
    margin: 0px 392px 0px 392px;
    z-index: 1;
`

export const settingSection = styled.section`
    width: 100%;
    padding: 60px 190px 0px 190px;
    text-align: center;
`

export const topSection = styled.section`
    text-align: center;
`

export const title = styled.p`
    color: #707070;
    font-size: 35px;
    font-weight: 400;
    margin: 10px;
`
export const headerBorder = styled.div`
    width: 90%;
    height: 5px;
    border: none; 
    background: linear-gradient(to right, #6E8EEA, #9B78EC);
    margin: 0 auto;
    
`


export const profileSection = styled.section`
    width: 34%;
    margin: 60px 0px 50px 110px;   
`
export const imgInput = styled.input.attrs({
    type: 'file',
})`
    display: none;
`

export const imgChange = styled.label.attrs({
    for: 'input-img'
})`
   cursor: pointer; 
`

export const imgBox = styled.div`
    width: 120px;
    height: 120px;
    position: relative;
    line-height: 110px;

`
export const profileChange = styled.img`
    width: 70%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    vertical-align: middle;
`
export const profileImge = styled.img`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    filter: brightness(50%);

`
export const nameBox = styled.div`
    width: 73%;
    margin: 0 auto;
`
export const nickname = styled.input.attrs({
    type: 'text',
    placeholder: "Nickname"
})`
    width: 100%;
    color: #707070;
    border: none;
    border-bottom: 1px solid #D1D1D1;
    font-size: 15px;
    margin: 0 auto;
    outline: none;
    ::placeholder {
        color: #D1D1D1;
    }
`

export const settingBtn = styled.button`
    width: 70%;
    height: 40px;
    margin: 50px;
    border: none;
    outline: none;
    font-size: 17px;
    color: white;
    background: linear-gradient(to right, #6E8EEA, #9B78EC);
`

export const backPage = styled.a`
    color: #6665E7;
    font-size: 15px;
`