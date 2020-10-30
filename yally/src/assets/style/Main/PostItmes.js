import styled from 'styled-components'

export const div = styled.div``;

export const postInfoContainer = styled.div`
    display: flex;
    justify-content : ${props => {
        if (props.post) return 'center';
        else return '';
        }};
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
    display : flex;
    justify-content : space-between;
    width : 100%;
`;

export const postSection = styled.section`
    width: 100%;
    height: 400px;
    opacity: 0.75;
    background-color : #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const audioContainer = styled.div`
    position : relative;
`;

export const audioImg = styled.img`
    width: 100%;
    height: 400px;
    opacity: 0.5;
`;

export const postArticle = styled.article`
    position : absolute;
    top : 30%;
    text-align : center;
`;

export const Icon = styled.img`
    width : ${props => {
        if (props.delete) return '20px';
        else if (props.comment) return '13px';
        else return '35px';
    }};
    height : ${props => {
        if(props.delete) return '20px';
        else if (props.comment) return '13px';
        else return '40px';
    }};
    margin : ${props => {
        if(props.delete) return '5px 0px 0px 5px';
        else if (props.comment) return '0px 0px 0px 5px';
        else return '0px';
    }};
    cursor : pointer;
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
    justify-content : space-between;
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
    width : 35px;
    height : 35px;
    cursor : pointer;
`;

export const reactionCount = styled.p`
    color : #707070;
    margin : 0;
`;

export const editButton = styled.button`
    border : none;
    color : #707070;
    font-size : 16px;
    cursor : pointer;
    outline : none;
`;

export const audioTimeline = styled.div`
    position: relative;
    width: 28rem;
    height: 0.01rem;
    margin: 2rem auto;
    border-radius: 15px;
    background-color : #fffff7;
`;

export const audioHandle = styled.div`
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin-top: -4px;
    background-color : #ffffff;
`;

export const audioDuration = styled.span`
    color: white;
    float: right;
    font-size : 0.8rem;
    margin-top: 5px;
`;