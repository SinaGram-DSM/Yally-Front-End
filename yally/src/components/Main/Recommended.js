import React, { useState } from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as R from '../../assets/style/Main/Recommend';
import { onUserListening } from "../../lib/api/listen";
import { refreshToken } from "../../lib/api/user";

const Recommended = ({ nickname, userImg, email}) => {
    const [onListen, setOnListen] = useState(false);

    const onListening = () => {
        const data = { "listeningEmail" : email };

        onUserListening(data.listeningEmail)
        .then((res) => {
            console.log(res);
            setOnListen(true);
        })
        .catch((err) => {
            if(err.status === 403) {
                refreshToken();
            }
        })
    }

    return (
            <R.recommendBox style={{display : onListen? "none" : ""}}>
                <S.profileImg src={process.env.REACT_APP_SRC_URL + userImg}></S.profileImg>
                <R.userName>{nickname}</R.userName>
                <R.ListeningButton onClick={onListening}>리스닝</R.ListeningButton>
            </R.recommendBox>
    );
};

export default Recommended;