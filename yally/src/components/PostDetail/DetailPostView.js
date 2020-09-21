import React from 'react';
import DetailPost from './DetailPost'
import CommentView from './CommentView'
import Background from '../Global/Background'
import * as C from '../../assets/style/PostDetail/Comment'
import * as P from '../../assets/style/Main/PostItmes'
import * as S from '../../assets/style/Main/AddTimeLine'

const DetailPostView = () => {
    return (
        <P.div>
        <S.mainContainer>
            <S.mainSection>
            <DetailPost></DetailPost>
            <CommentView></CommentView>
            </S.mainSection>
        </S.mainContainer>
        <Background></Background> 
        </P.div>
    );
};

export default DetailPostView;