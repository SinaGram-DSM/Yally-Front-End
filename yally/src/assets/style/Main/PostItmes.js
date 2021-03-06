import styled from "styled-components";

export const div = styled.div``;

export const postInfoContainer = styled.div`
  display: flex;
  justify-content: ${(props) => {
    if (props.post) return "center";
    else return "";
  }};
`;

export const postNameInfo = styled.h1`
  font-size: 1.563rem;
  color: #707070;
  font-weight: 400;
  margin: 0.1875rem 0 0 0;
`;

export const postDateInfo = styled.p`
    font-size: 1.25rem;
    color : #707070;
    font-weight: 200;
    margin : 0.1875rem 0 0 0;
`;

export const postInfoBox = styled.div`
  margin: 0.625rem 0 3.125rem 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const postSection = styled.section`
  width: 53.88rem;
  height: 25rem;
  opacity: 0.75;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1020px) {
    & {
      width: 100%;
      height: auto !important;
    }
  }
`;

export const audioContainer = styled.div`
  position: relative;
  width: 53.88rem;
  height: 25rem;
  @media only screen and (max-width: 1020px) {
    & {
      width: 100%;
      height: auto !important;
    }
  }
`;

export const audioImg = styled.img`
  width: 53.88rem;
  height: 25rem;
  opacity: 0.5;
  @media only screen and (max-width: 1020px) {
    & {
      width: 100%;
      height: auto !important;
    }
  }
`;

export const postArticle = styled.article`
  position: absolute;
  top: 30%;
  text-align: center;
  @media only screen and (max-width: 1020px) {
    & {
      top: 20%;
      width: 80%;
      height: auto !important;
    }
  }
`;

export const Icon = styled.img`
  width: ${(props) => {
    if (props.delete) return "1.25rem";
    else if (props.comment) return "0.8125rem";
    else return "2.188rem";
  }};
  height: ${(props) => {
    if (props.delete) return "1.25rem";
    else if (props.comment) return "0.8125rem";
    else return "2.5rem";
  }};
  margin: ${(props) => {
    if (props.delete) return "0.3125rem 0 0 0.3125rem";
    else if (props.comment) return "0 0 0 0.3125rem";
    else return "0";
  }};
  cursor: pointer;
`;

export const playIcon = styled.img``;

export const playInfoBox = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 830px) {
    & {
        margin : 0 1rem 0rem 1rem;
    }
    }
`;

export const postWritten = styled.p`
  font-weight: 400;
  font-size: 1.438rem;
  color: #ffffff;
  margin-bottom: 1.25rem;
  @media only screen and (max-width: 830px) {
    & {
        font-size : 1.1rem;
    }
  }
`;

export const reactionContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${(props) => {
    if (props.detailPost) return "1.563rem";
    else return "none";
  }};
  border-bottom: ${(props) => {
    if (props.detailPost) return "1px solid #EFEFEF";
    else return "none";
  }};
`;

export const reactionBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.188rem;
`;

export const reactionIcon = styled.img`
  margin-right: 5px;
  width: 2.188rem;
  height: 2.188rem;
  cursor: pointer;
`;

export const reactionCount = styled.p`
  color: #707070;
  margin: 0;
`;

export const editButton = styled.button`
  border: none;
  color: #707070;
  background-color: inherit;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
`;

export const audioTimeline = styled.div`
  position: relative;
  width: 28rem;
  height: 0.01rem;
  margin: 2rem auto;
  border-radius: 15px;
  background-color: #fffff7;
`;

export const audioHandle = styled.div`
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: -4px;
  background-color: #ffffff;
`;

export const audioDuration = styled.span`
  color: white;
  float: right;
  font-size: 0.8rem;
  margin-top: 5px;
`;

export const audioPlayerContainer = styled.div`
`;
