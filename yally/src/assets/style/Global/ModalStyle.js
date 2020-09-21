import styled from 'styled-components'

export const modalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

export const modalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const modalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 520px;
  height : 300px;
  max-width: 520px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 0px 0px 0px;
  text-align : center;
  display : flex;
  justify-content : center;
  align-items : center;
`

export const closeButton = styled.button`
    float : right;
    position : absolute;
    top : 5%; 
    right : 3%;
    border : none;
    font-size : 25px;
    color : #707070;
    font-weight : 200;
    outline : none;
    cursor : pointer;
`;