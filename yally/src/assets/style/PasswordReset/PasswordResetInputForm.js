import styled from 'styled-components';
import * as P from './PasswordResetPage';
import * as L from './login';

export const guidance = styled(P.guidance)`
    margin-bottom: 70px;
`;

export const submitNewPassword = styled(P.sendResetCode)`
    margin-top: 30px;
`;

export const helpIcon = styled.img`
    height: 20px;
    width: 20px;
`;

export const helpBox = styled(L.mainContainer)`
    position: absolute;
    border: 1px solid #D1D1D1;
    width: 320px;
    top: 80px;
    left: 650px;
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