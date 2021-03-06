import styled from 'styled-components'

export const backgroundContainer = styled.img`
    width : 100%;
    position : absolute;
    background-color : rgb(253, 253, 253);
    left : 0;
    top : ${props => {
        if(props.modal) return '';
        else return '100%';
    }};
    bottom : ${props => {
        if(props.modal) return '0';
        else return '100%';
    }};
`;