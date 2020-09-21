import React from 'react';
import {background} from '../../assets/img/index'
import * as S from '../../assets/style/Global/GlobalStyle'

const ModalBackground = () => {
    return (
        <div>
            <S.backgroundContainer src={background} modal></S.backgroundContainer> 
        </div>
    );
};

export default ModalBackground;