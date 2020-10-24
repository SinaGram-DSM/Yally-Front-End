import styled from 'styled-components'

export const mainContainer = styled.div`
    display: flex;
    margin : ${props => {
        if (props.small) return '0px 392px 0px 392px';
        else if(props.detailPost) return '0px';
        else if(props.profile) return '0px 392px 0px 392px';
        else return '0px 392px 50px 392px;';
      }};
    justify-content : ${props => props.friends ? 'space-between' : 'center' }; 
`;

export const mainSection  = styled.section`
    width : 100%;
    background-color : #ffffff;
    box-shadow: ${props => {
        if (props.small) return 'none';
        else if (props.profile) return 'none';
        else return '0 0 6px #00000004;';
      }};
    padding : ${props => {
        if (props.small) return '0px 30px 0px 30px';
        else if (props.profile) return 'none';
        else return '30px';
      }};
    
    margin-top : ${props => {
        if (props.small) return '30px';
        else if(props.feed) return 'none';
        else return '50px';
      }};
    z-index: 1;
`;

export const writerInfoBox = styled.div`
    width : 100%;
    height: 106px;
    display: flex;
    align-items: center;
    border-top : ${props => props.comment ? '1px solid #EFEFEF' : 'none' };
    border-bottom: ${props => props.profile ? 'none' : '1px solid #EFEFEF'};
    margin : 0px 0px 25px 0px;
    padding-bottom : 20px;
`;

export const form = styled.form`
    width : ${props => {
        if (props.input) return '90%';
        else return '';
      }};
`;

export const writerInput = styled.input`
    width: 95%;
    height: 100px;
    margin-left: ${props => props.comment ? '' : '15px' };
    border: none;
    font-size: ${props => props.comment ? '19px' : '25px' };
    font-weight: 300;
`;

export const profileImg = styled.img`
    width: ${props => {
        if(props.profile) return '130px'
        else if(props.header || props.menu) return '45px';
        else return '70px';
    }};
    height: ${props => {
        if(props.profile) return '130px'
        else if(props.header || props.menu) return '45px';
        else return '70px';
    }};
    margin: ${props => props.menu ? '10px 0px 0px 53px': 'none'} ; 
    border-radius: 9999px;
    border: none;
    background-color: rgb(211, 183, 183);
    box-shadow : 0 0 6px #00000016;
    cursor: ${props => props.header ? 'pointer' : 'none'};
`;

export const buttonsContainer = styled.div`
    display: flex;
    align-items: center;
    width : ${props => props.button ? '90%' : ''};
    justify-content : ${props => props.container ? 'space-between' : ''};
    margin-top : ${props => props.rec ? '15px' : ''};
`;

export const buttonBox = styled.label`
    width: 102px;
    height: 35px;
    background-color: #EFEFEF;
    border-radius: 23px;
    margin-right: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    cursor: pointer;
    color: #707070;
    font-size: 15px;
    padding: 3px;

    &:hover {
        background-color : #D1D1D1;
        transition : 0.3s
    }
`;
export const inputFile = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;

export const buttonIcon = styled.img`
    width : 20px;
    height : 20px;
`;

export const previewIcon = styled.img`
    width : 25px;
    height : 23px;
    border : 1px solid #6665E7;
    border-radius : 4px;
    margin-right : 10px;
`;

export const recordingIcon = styled.div`
    width : 35px;
    height : 35px;
    background: linear-gradient( 45deg, #DB6565, #C71313);
    border-radius : 99px;
    margin-right : 10px;
    box-shadow : #00000016 0px 3px 6px;
`;

export const recordText = styled.span`
    color : #D34646;
    font-size : 0.9rem;
    font-weight : 400;
    margin-right : 10px;
`;