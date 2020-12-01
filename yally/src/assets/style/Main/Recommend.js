import styled from "styled-components";

export const recommendBox = styled.div`
  box-shadow: 0 0 6px #00000011;
  width: 8.438rem;
  height: 11.25rem;
  padding-top: 1.25rem;
  text-align: center;
  @media only screen and (max-width: 620px) {
    & {
      width : 2.5rem;
      padding : 1rem;
      height : auto !important;
    }
  }
`;

export const userName = styled.p``;

export const ListeningButton = styled.button`
  background-color: #6665e7;
  width: ${(props) => (props.comment ? "4.375rem" : "5.625rem")};
  height: 2.5rem;
  border: none;
  border-radius: 99px;
  color: white;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
  @media only screen and (max-width: 620px) {
    & {
      width: 3rem;
      font-size : 0.3rem;
      padding : 0.5rem 0;
      height : auto !important;
    }
  }
`;
