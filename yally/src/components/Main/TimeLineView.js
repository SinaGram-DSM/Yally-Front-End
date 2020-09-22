import React from 'react';
import AddPost from '../Main/AddPost'
import Recommended from '../Main/Recommended'
import PostItem from '../Main/PostItem'
import Background from '../Global/Background'

const TimeLineView = () => {
    return (
        <div style={{position : "relative", backgroundColor : "#FDFDFD"}}>
            <AddPost></AddPost>
            <Recommended></Recommended>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <Background></Background>
        </div>
    );
};

export default TimeLineView;