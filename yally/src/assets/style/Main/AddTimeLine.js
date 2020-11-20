import styled from "styled-components";

export const mainContainer = styled.div`
  display: ${(props) => {
    if (props.user) return "inline-block";
    else return "flex";
  }};
  margin: ${(props) => {
    if (props.small) return "0 24.5rem 0 24.5rem";
    else if (props.detailPost || props.user) return "0 0 0 24.5rem";
    else if (props.profile) return "0 24.5rem 0 24.5rem";
    else if (props.comment) return "0 0 0 0";
    else return "0 24.5rem 3.125rem 24.5rem";
  }};
  justify-content: center;
  width: ${(props) => {
    if (props.user) return "85%";
    else return "";
  }};
  margin-top: ${(props) => {
    if (props.user) return "30px";
    else return 0;
  }};
  @media only screen and (max-width: 1020px) {
    & {
      margin: 0 4rem 2.125rem 4rem;
      height: auto !important;
    }
  }
`;

export const mainSection = styled.section`
  width: ${(props) => (props.friends ? "59.88rem" : "55rem")};
  background-color: ${(props) => {
    if (props.profile || props.friends) return "none";
    else return "#ffffff";
  }};
  box-shadow: ${(props) => {
    if (props.small) return "none";
    else if (props.profile) return "none";
    else return "0 0 6px #00000004;";
  }};
  padding: ${(props) => {
    if (props.small) return "0 1.875rem 0 1.875rem";
    else if (props.profile || props.friends) return "none";
    else return "2rem 3rem 2rem 3rem";
  }};

  margin-top: ${(props) => {
    if (props.small) return "1.875rem";
    else if (props.feed) return "none";
    else if (props.profile) return "2.5rem";
    else return "3.125rem";
  }};
  z-index: 1;
  display: ${(props) => (props.friends ? "flex" : "")};
  justify-content: ${(props) => (props.friends ? "space-between" : "")};
  @media only screen and (max-width: 1020px) {
    & {
      width: 100%;
      height: auto !important;
    }
  }
`;

export const writerInfoBox = styled.div`
  width: 100%;
  height: 6.625rem;
  display: flex;
  align-items: center;
  border-top: ${(props) => (props.comment ? "1px solid #EFEFEF" : "none")};
  border-bottom: ${(props) => (props.profile ? "none" : "1px solid #EFEFEF")};
  margin: 0 0 1.563rem 0;
  padding-bottom: 1.25rem;
`;

export const form = styled.form`
  width: ${(props) => {
    if (props.input) return "90%";
    else return "";
  }};
`;

export const writerInput = styled.input`
  width: ${(props) => (props.input ? "" : "46.06rem")};
  height: 6.25rem;
  margin-left: ${(props) => (props.comment ? "" : "0.9375rem")};
  border: none;
  font-size: ${(props) => (props.comment ? "1.188rem" : "1.563rem")};
  font-weight: 300;
`;

export const profileImg = styled.img`
  width: ${(props) => {
    if (props.profile) return "6.25rem";
    else if (props.header || props.menu) return "2.813rem";
    else return "4.375rem";
  }};
  height: ${(props) => {
    if (props.profile) return "6.25rem";
    else if (props.header || props.menu) return "2.813rem";
    else return "4.375rem";
  }};
  margin: ${(props) => (props.menu ? "0.625rem 0 0 3.313rem" : "none")};
  border-radius: 9999px;
  border: none;
  background-color: rgb(211, 183, 183);
  box-shadow: 0 0 6px #00000016;
  cursor: ${(props) => (props.header ? "pointer" : "none")};
  @media only screen and (max-width: 620px) {
    & {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const buttonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.button ? "90%" : "")};
  justify-content: ${(props) => (props.container ? "space-between" : "")};
  margin-top: ${(props) => (props.rec ? "0.9375rem" : "")};
  @media only screen and (max-width: 620px) {
    & {
      justify-content: none;
    }
  }
`;

export const buttonBox = styled.label`
  width: 6.375rem;
  height: 2.188rem;
  background-color: #efefef;
  border-radius: 23px;
  margin-right: 1.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: none;
  cursor: pointer;
  color: #707070;
  font-size: 0.9375rem;
  padding: 0.1875rem;

  &:hover {
    background-color: #d1d1d1;
    transition: 0.3s;
  }
  @media only screen and (max-width: 620px) {
    & {
      //   width: 4rem;
      //   font-size : 0.7rem;
      //   height : auto !important;
    }
  }
`;
export const inputFile = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const buttonIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  @media only screen and (max-width: 620px) {
    & {
      width: 20%;
      font-size: 0.8rem;
      height: 30%;
    }
  }
`;

export const previewIcon = styled.img`
  width: 1.563rem;
  height: 1.438rem;
  border: 1px solid #6665e7;
  border-radius: 4px;
  margin-right: 0.625rem;
`;

export const recordingIcon = styled.div`
  width: 2.188rem;
  height: 2.188rem;
  background: linear-gradient(45deg, #db6565, #c71313);
  border-radius: 99px;
  margin-right: 0.625rem;
  box-shadow: #00000016 0 3px 6px;
`;

export const recordText = styled.span`
  color: #d34646;
  font-size: 0.9rem;
  font-weight: 400;
  margin-right: 0.625rem;
`;

export const notFoundTitle = styled.h1`
  font-size: 10rem;
  margin: 5rem auto 0rem auto;
  background: linear-gradient(to right, #4776e6, #8e54e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const notFoundText = styled.p`
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(to right, #4776e6, #8e54e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
