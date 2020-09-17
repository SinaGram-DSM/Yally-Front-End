import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend'

const Recommended = () => {
    return (
        <S.mainContainer>
            <R.recommendBox>
                <S.profileImg></S.profileImg>
                <R.userName>뫙뫙</R.userName>
                <R.ListeningButton>리스닝</R.ListeningButton>
            </R.recommendBox>
            
        </S.mainContainer>
    );
};

export default Recommended;