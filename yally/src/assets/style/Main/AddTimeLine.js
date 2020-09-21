import styled from 'styled-components'

export const mainContainer = styled.div`
    display: flex;
    margin : ${props => {
        if (props.small) return '0px 392px 0px 392px';
        else if(props.detailPost) return '0px';
        else return '0px 392px 50px 392px;';
      }};
    justify-content : space-between;  
    justify-content : center;
`;

export const mainSection  = styled.section`
    width : 100%;
    background-color : #ffffff;
    box-shadow: ${props => {
        if (props.small) return 'none';
        else return '0 0 6px #00000004;';
      }};
    padding : ${props => {
        if (props.small) return '0px 30px 0px 30px';
        else return '30px';
      }};
    
    margin-top : ${props => {
        if (props.small) return '30px';
        else return '60px';
      }};
`;

export const writerInfoBox = styled.div`
    height: 106px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EFEFEF;
    margin : 0px 0px 25px 0px;
    padding-bottom : 20px;
`;

export const form = styled.form`
    width : 100%;
`;

export const writerInput = styled.input`
    width: 95%;
    height: 100px;
    margin-left: 15px;
    border: none;
    font-size: 25px;
    font-weight: 300;
`;

export const profileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 9999px;
    border: none;
    background-color: rgb(211, 183, 183);
    box-shadow : 0 0 6px #00000016;
`;

export const buttonsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const buttonBox = styled.button`
    width: 102px;
    height: 43px;
    background-color: #EFEFEF;
    border-radius: 23px;
    margin-right: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    cursor: pointer;
    color: #707070;
    font-size: 15px;
    padding: 10px;

    &:hover {
        background-color : #D1D1D1;
        transition : 0.3s
    }
`;

export const buttonIcon = styled.img`
    width : 16px;
    height : 16px;
`;