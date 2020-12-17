import styled from "styled-components";

export const OutHeader = styled.div`
  display: inline-block;
  margin: 0 18.5rem 0 18.5rem;
  justify-content: center;
  @media only screen and (max-width: 1020px) {
    & {
      margin: 0 9rem 0 9rem;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
`;

export const logoSection = styled.section`
  width: 20%;
  margin-top: 0.625rem;
`;

export const logoImg = styled.img`
  width: 6.25rem;
  cursor: pointer;
`;

export const inputContainer = styled.div`
  margin: 1.1rem 1rem 0 28rem;
`;
export const inputBoxContainer = styled.div``;
export const inputBox = styled.input.attrs({
  type: "text",
  placeholder: "검색어를 입력하세요",
})`
  visibility: hidden;
  background: none;
  width: 15.63rem;
  height: 1.438rem;
  font-size: 0.9375rem;
  color: #707070;
  outline: none;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  ::placeholder {
    color: #d1d1d1;
    font-size: 0.9375rem;
  }
  &:hover {
    visibility: visible;
  }
`;

export const imgContainer = styled.div`
  width: 100%;
  margin: 0.625rem 0 0 0.75rem;
  display: flex;
`;
export const searchIcon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin-top: 1.063rem;
  cursor: pointer;
`;

export const moreBtn = styled.img`
  margin: 1.25rem 0 1.875rem 0.625rem;
  width: 0.75rem;
  height: 0.625rem;
  vertical-align: middle;
  cursor: pointer;
`;
export const menuBox = styled.div`
  background-color: white;
  position: absolute;
  right: 0;
  width: 9.375rem;
  height: 13.75rem;
  margin: 4.375rem 0 0 48.75rem;
  border: 1px solid #00000004;
  box-shadow: 0.625rem 1.25rem 1.25rem 0 #00000016;
  color: white;
  z-index: 10;
`;
export const textContainer = styled.div`
  text-align: center;
`;
export const menuText = styled.p`
  font-size: ${(props) => (props.email ? "10px" : "18px")};
  color: ${(props) => {
    if (props.email || props.name || props.setting) return "#707070";
    else return "red";
  }};
  margin: ${(props) => {
    if (props.setting || props.logout) return "20px";
    else if (props.email) return "5px";
    else return "0 auto";
  }};
  cursor: ${(props) => {
    if (props.setting || props.logout) return "pointer";
    else return "none";
  }};
  text-decoration: none;
`;

export const container = styled.div`
  display : flex;
  justify-content : center;
`;