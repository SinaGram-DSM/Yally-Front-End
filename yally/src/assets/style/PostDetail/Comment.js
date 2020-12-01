import styled from 'styled-components'

export const commentContainer = styled.div`
    box-shadow : 0 0 6px #00000004;
    background-color : #ffffff;
    width : 100%;
`;

export const commentBox = styled.div`
    display : flex;
    align-items : center;
    margin-bottom : 0.625rem;
`;

export const commentWriter = styled.h2`
    font-weight : 400;
    margin : 0;
    color : #707070;
    margin-right : 0.9375rem;
`;

export const commentDate = styled.p`
    color : #707070;
    font-size : 0.875rem;
    font-weight : 400;
    margin : 0
`;

export const contents = styled.p`
    font-weight : 400;
    margin : 0;
    color : #707070;
    font-size : 1.188rem;
`;

export const commentInfo = styled.div`
    display : flex;
    align-items : center;
    margin-bottom : 0.625rem;
`;

export const div = styled.div`
    margin : 0.625rem 0 0 1.25rem;
    width : ${props => props.input ? '100%' : '' };
`