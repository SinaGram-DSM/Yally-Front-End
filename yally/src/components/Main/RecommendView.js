import React, {useState, useEffect} from 'react';
import Recommended from './Recommended';
import * as S from "../../assets/style/Main/AddTimeLine";
import axios from 'axios'

const RecommendView = ({src, baseUrl}) => {
    const [recommend, setRecommend] = useState([]);
    const config = {
        headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
    }
    useEffect(() => {
        axios.get(baseUrl + "timeline/friend", config)
        .then((res) => {
            setRecommend(res.data.friends);
        })
    }, [])

    return (
        <S.mainContainer friends>
            {recommend.map((r) => (
                <Recommended
                baseUrl={baseUrl}
                src = {src}
                key={r.id}
                id={r.id}
                email={r.email}
                nickname = {r.nickname}
                userImg = {r.img}
                ></Recommended>
            ))}
        </S.mainContainer>
    );
};

export default RecommendView;