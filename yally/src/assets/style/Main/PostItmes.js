import styled from 'styled-components'

export const div = styled.div``;

export const postInfoContainer = styled.div`
    display: flex;
`;

export const postNameInfo = styled.h1`
    font-size: 25px;
    color: #707070;
    font-weight: 400;
    margin : 3px 0px 0px 0px;
`;

export const postDateInfo = styled.p`
    font-size: 20px;
    color: #707070;
    font-weight: 200;
    margin : 3px 0px 0px 0px;
`;

export const postInfoBox = styled.div`
    margin : 10px 0px 50px 20px;
`;

export const postSection = styled.section`
    width: 100%;
    height: 400px;
    background-color: #000000;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const postArticle = styled.article`
    width: 440px;
`;

export const Icon = styled.img`
    width : ${props => {
    if (props.delete) return '20px';
    else return '45px';
  }};
    height : ${props => {
        if(props.delete) return '20px';
        else return '50px';
    }};
    margin : ${props => {
        if(props.delete) return '5px 0px 0px 5px';
        else return '0px';
    }};
    cursor : pointer;
`;

export const playIcon = styled.img`
`;

export const playInfoBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const postWritten = styled.p`
    font-weight: 400;
    font-size: 23px;
    color : #FFFFFF;
    margin-bottom: 20px;
`;

export const reactionContainer = styled.div`
    margin-top : 20px;
    display: flex;
    align-items: center;
    padding-bottom : ${props => {
        if (props.detailPost) return '25px';
        else return 'none';
      }};
    border-bottom : ${props => {
        if (props.detailPost) return '1px solid #EFEFEF';
        else return 'none';
      }};
`;

export const reactionBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
`;

export const reactionIcon = styled.img`
    margin-right : 5px;
`;

export const reactionCount = styled.p`
    color : #707070;
    margin : 0;
`;