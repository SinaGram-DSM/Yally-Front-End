import React, { useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import axios from 'axios'

const Recommended = ({src, nickname, id, userImg, baseUrl, email}) => {
    const [onListen, setOnListen] = useState(false);

    const onListening = () => {
        const config = {
            headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
        };
        const data = { "listeningEmail" : email };

        axios.post(baseUrl + 'user/listening' , data, config)
        .then((res) => {
            console.log(res);
            setOnListen(true);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
            <R.recommendBox style={{display : onListen? "none" : ""}}>
                <S.profileImg src={src + userImg}></S.profileImg>
                <R.userName>{nickname}</R.userName>
                <R.ListeningButton onClick={onListening}>리스닝</R.ListeningButton>
            </R.recommendBox>
    );
};

export default Recommended;