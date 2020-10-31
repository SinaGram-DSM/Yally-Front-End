import styled from 'styled-components';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content : space-between;
`

export const logoSection = styled.section`
    width: 20%;
    margin-top: 10px;
`

export const logoImg = styled.img`
    width: 100px;
    cursor: pointer;
`

export const inputContainer = styled.div`
    margin: 20px 0px 0px 280px;
`
export const inputBoxContainer = styled.div`
`
export const inputBox = styled.input.attrs({
    type: 'text',
    placeholder: '검색어를 입력하세요'
})`
   visibility:hidden;
   background: none;
   width: 250px;
   height: 23px;
   font-size: 15px;
   color: #707070;
   outline: none;
   border: none;
   border-bottom: 1px solid #D1D1D1; 
   ::placeholder {
       color: #D1D1D1;
       font-size: 15px;
   }
   &:hover { 
    visibility: visible;
   }
`

export const imgContainer = styled.div`
   margin: 10px 0px 0px 13px;
   display: flex;
   align-items : center;
`
export const searchIcon = styled.img`
   width: 30px;
   height: 30px;
   margin-top: 17px;
   cursor: pointer;
`

export const moreBtn = styled.img`
   margin: 0 0 0 1rem;
   width: 12px;
   height: 10px;
   vertical-align: middle;
   cursor: pointer;
`
export const menuBox = styled.div`
   background-color: white;
   position: absolute;
   right: 0;
   width: 150px;
   height: 220px;
   margin: 70px 0px 0px 780px;
   border: 1px solid #00000004;
   box-shadow : 10px 10px 20px 0px #00000016;
   color: white;
   z-index: 10;
`
export const textContainer = styled.div`
   text-align: center;
`
export const menuText = styled.p`
   font-size: ${props => props.email ? '10px' : '18px'};
   color: ${props => {
    if(props.email || props.name || props.setting) return '#707070';
    else return 'red';
   }};
   margin: ${props => {
       if(props.setting || props.logout) return '20px';
       else if (props.email) return '5px';
       else return '0 auto';
   }};
   cursor: ${props => {
       if(props.setting || props.logout) return 'pointer';
       else return 'none';
   }};
   text-decoration: none;
`