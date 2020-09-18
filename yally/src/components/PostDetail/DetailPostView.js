import React from 'react';
import DetailPost from './DetailPost'
import CommentView from './CommentView'
import Background from '../Global/Background'
import * as C from '../../assets/style/PostDetail/Comment'
import * as S from '../../assets/style/Main/AddTimeLine'
import PostItem from './DetailPost';

const DetailPostView = () => {
    return (
        <div>
        <S.mainContainer>
            <div>
            
            <PostItem></PostItem>
            <CommentView></CommentView>
            
            
            </div>
        </S.mainContainer>
        <Background></Background>
        </div>
        
    );
};

export default DetailPostView;