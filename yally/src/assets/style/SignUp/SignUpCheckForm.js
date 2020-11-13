import styled from 'styled-components';
import * as L from '../Login/LoginPage';

export const input = styled(L.input)`
    margin-bottom: 200px;
`;

export const button = styled(L.loginButton)`
    margin-bottom: 30px;
`;

export const info = styled(L.greet)`
    margin-bottom: 50px;
`;

export const help = styled.img`
    height: 20px;
    width: 20px;
`;

export const helpBox = styled(L.mainContainer)`
    position: absolute;
    border: 1px solid #D1D1D1;
    width: 320px;
    top: 70px;
    left: 520px;
`;

export const QA = styled.span`
    color: #6665E7;
`;

export const helpText = styled.p`
    color: #707070;
    font-size: 16px;
    padding-right: 5px;
    padding-left: 5px;
`;