import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend'

const Recommended = ({src, nickname, id, userImg}) => {
    return (
            <R.recommendBox>
                <S.profileImg src={src + userImg}></S.profileImg>
                <R.userName>{nickname}</R.userName>
                <R.ListeningButton>리스닝</R.ListeningButton>
            </R.recommendBox>
            
    );
};

export default Recommended;