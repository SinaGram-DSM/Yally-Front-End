import styled from 'styled-components';
import {background} from '../../img/index';

export const logo = styled.img`
    width: 113px;
    height: 50px;
    margin-top : 0.6rem;
`;

export const allDiv = styled.div`
    height : 100vh;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-image : url(${background});
`;

export const allContainer = styled.div`
    // position: relative;
    height: 100vh;
    height : 100%;
    margin: 0 392px 0 392px;
    
`;

export const mainContainer = styled.div`
   margin-top : ${(props) => (props.box ? "5rem" : "")};
`;

export const mainSection = styled.div`
    display: flex;
    justify-content: center;
`;

export const header = styled.p`
    text-align: center;
    font-size: 40px;
    color: #707070;
    margin-bottom: 0.3rem;
`;

export const bar = styled.div`
    text-align: conter;
    background: linear-gradient( to right, #4776E6, #8E54E9 );
    width: 120px;
    height: 5px;
    margin-bottom : 1rem;
`;

export const greet = styled.p`
    color: #707070;
    font-size: 18px;
    margin-bottom: 30px;
`;
export const input = styled.input`
    display: block;
    width: 300px;
    height: 30px;
    border: 0;
    color: #717171;
    border-bottom: 2px solid #D1D1D1;
    margin-bottom: 40px;
`;
export const loginButton = styled.button`
    width: 260px;
    height: 50px;
    color: white;
    background-color: #d1d1d1;
    border: 0;
    font-size: 16px;
    margin-bottom: 100px;
`;
export const solveProblem = styled.p`
    text-align: center;
    color: #707070;
    margin: 5px;
`;
export const link = styled.a`
    color: #6665E7;
`;