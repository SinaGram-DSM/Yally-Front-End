import React from 'react';
import * as T from '../../assets/style/UserPage/Listen';
import * as L from '../../assets/style/UserPage/PageStyle';
import * as M from '../../assets/style/Main/AddTimeLine';


const Users = ({img, nickname, listening, listener, isListening}) => {
    const url = "https://yally-sinagram.s3.ap-northeast-2.amazonaws.com/"
    return(
        <M.mainContainer>
            <T.mainSection>
                <T.listenSection>
                    <T.containerBox>
                        <T.itemBox>
                        <T.boxImg src={url + img}/>  
                            <T.userBox>
                                <T.name>{nickname}</T.name>
                                    <L.Listen list>
                                    <L.Listening listen>리스닝 {listening}</L.Listening>
                                    <L.Listener listen>리스너 {listener}</L.Listener>
                                    </L.Listen>
                            </T.userBox>
                        </T.itemBox>
            {isListening ? 
                <T.listenBtn>리스닝</T.listenBtn> :
                <T.unlistenBtn>언리스닝</T.unlistenBtn>
            }
                    </T.containerBox>
                </T.listenSection>
            </T.mainSection>
        </M.mainContainer>
    );
}

export default Users;