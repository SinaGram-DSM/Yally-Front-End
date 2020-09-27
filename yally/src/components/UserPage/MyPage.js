import React from 'react';
import * as M from '../../assets/style/UserPage/PageStyle';
import * as S from '../../assets/style/Main/AddTimeLine'
import MyFeed from './MyFeed';

const MyPage = () => {
    return(
        <div>
        <S.mainContainer profile>
            <S.mainSection profile>
            <S.writerInfoBox profile>
                <S.profileImg profile></S.profileImg>
            <M.ProfileData>
                <M.UserName>데인 드한</M.UserName>   
                <M.Email>(dehaan@hansome.kr)</M.Email>
            <M.Listen>
                <M.Listening>리스닝 123</M.Listening>
                <M.Listener>리스너 123</M.Listener>
                </M.Listen>
                </M.ProfileData>
            </S.writerInfoBox>
            </S.mainSection>
        </S.mainContainer>
        <MyFeed></MyFeed>
    </div>
    );
}


export default MyPage;