import React from 'react';
import {background} from '../../assets/img/index'
import * as S from '../../assets/style/Global/GlobalStyle'

const Background = () => {
    return (
        <div>
            <S.backgroundContainer src={background}></S.backgroundContainer> 
        </div>
    );
};

export default Background;