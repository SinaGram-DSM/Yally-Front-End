import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import axios from 'axios'

const Recommended = ({src, nickname, id, userImg, baseUrl, email}) => {
    const onListening = () => {
        const config = {
            headers : { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'}
        };
        const data = { "listeningEmail" : email };

        axios.post(baseUrl + 'user/listening' , data, config)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
            <R.recommendBox>
                <S.profileImg src={src + userImg}></S.profileImg>
                <R.userName>{nickname}</R.userName>
                <R.ListeningButton onClick={onListening}>리스닝</R.ListeningButton>
            </R.recommendBox>
    );
};

export default Recommended;