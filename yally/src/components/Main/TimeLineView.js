import React, { useState, useEffect } from 'react';
import AddPost from '../Main/AddPost'
import Recommended from '../Main/Recommended'
import PostItem from '../Main/PostItem'
import Background from '../Global/Background'
import axios from 'axios'

const TimeLineView = () => {

    let [posts, setPosts] = useState([]);
    let [params, setParams] = useState(1);

    useEffect(() => {
        getPosts();
      }, []);

    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    const getPosts = () => {
        axios.get("http://13.125.238.84:81/timeline/" + params, config)
        .then((res) => {
            console.log(res)
            setPosts(res.data.posts)
        })
    }

    return (
        <div style={{position : "relative", backgroundColor : "#FDFDFD"}}>
            <AddPost></AddPost>
            <Recommended></Recommended>
            {posts.map((post) => (
                <PostItem 
                key={post.id}
                content = {post.content}
                sound = {post.sound}
                date = {post.createdAt}
                nickname = {post.user.nickname}
                userImg = {post.user.img}
                audioImg = {post.img}
                isComment = {post.comments}
                isYally = {post.yallies}
                isMine = {post.isYally}
                ></PostItem>
            ))}
            
            <Background></Background>
        </div>
    );
};

export default TimeLineView;