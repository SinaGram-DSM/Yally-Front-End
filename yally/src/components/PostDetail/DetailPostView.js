import React from 'react';
import DetailPost from './DetailPost'
import Comment from './Comment'
import Background from '../Global/Background'

const DetailPostView = () => {
    return (
        <div>
            <DetailPost></DetailPost>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Background></Background>
        </div>
    );
};

export default DetailPostView;