import styled from 'styled-components'

export const recommendBox = styled.div`

    box-shadow: 0 0 6px #00000011;
    width: 135px;
    height: 180px;
    padding-top: 20px;
    text-align: center;
`;

export const userName = styled.p`

`;

export const ListeningButton = styled.button`
    background-color: #6665E7;
    width: ${props => props.comment ? '70px' : '90px' };
    height: 40px;
    border: none;
    border-radius: 99px;
    color: white;
    font-size: 16px;
    outline : none;
    cursor : pointer;
    opacity : 0.8;

        &:hover {
            opacity : 1;
            transition : 0.3s;
        }
`;