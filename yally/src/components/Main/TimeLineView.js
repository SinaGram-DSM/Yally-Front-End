import React, { useState, useEffect, useCallback} from 'react';
import AddPost from '../Main/AddPost'
import RecommendView from '../Main/RecommendView'
import PostItem from '../Main/PostItem'
import Background from '../Global/Background'
import axios from 'axios'

const TimeLineView = ({src, baseUrl}) => {

    const [posts, setPosts] = useState([]);
    const [params, setParams] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }

    const infiniteScroll = useCallback(() => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
      
        if(scrollTop + clientHeight === scrollHeight && isLoading === true) {
          setPosts(posts.concat(posts));
          setParams(state => state + 1)
        }
      }, [posts, params]);
      
    useEffect(() => { 
        axios.get(baseUrl + "timeline/" + params, config)
        .then((res) => {
            setPosts(res.data.posts);
            setIsLoading(true)
        })
            window.addEventListener('scroll', infiniteScroll);
            return () => window.removeEventListener('scroll', infiniteScroll);
         }
        , [infiniteScroll]);

    return (
        <div style={{position : "relative", backgroundColor : "#FDFDFD"}} >
            <AddPost src={src} baseUrl={baseUrl}></AddPost>
            <RecommendView src={src} baseUrl={baseUrl}></RecommendView>
            {posts.map((post) => (
                <PostItem 
                email = {post.user.email}
                baseUrl = {baseUrl}
                key = {post.id}
                id = {post.id}
                content = {post.content}
                sound = {post.sound}
                date = {post.createdAt}
                nickname = {post.user.nickname}
                userImg = {post.user.img}
                audioImg = {post.img}
                isComment = {post.comment}
                isYally = {post.isYally}
                yallyNum = {post.yally}
                isMine = {post.isMine}
                ></PostItem>
            ))}
            <Background></Background>
        </div>
    );
};

export default TimeLineView;