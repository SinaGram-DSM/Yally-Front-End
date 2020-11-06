import React, {useState, useEffect} from 'react';
import Recommended from './Recommended';
import * as S from "../../assets/style/Main/AddTimeLine";
import axios from 'axios'
import { refresh } from '../../constant';

const RecommendView = ({src, baseUrl}) => {
    const [recommend, setRecommend] = useState([]);
    const config = {
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')}
    }
    useEffect(() => {
        axios.get(baseUrl + "timeline/friend", config)
        .then((res) => {
            setRecommend(res.data.friends);
        })
        .catch((err) => {
            if(err.status === 403) {
                refresh();
            }
        })
    }, [])

    return (
        <S.mainContainer friends>
            <S.mainSection friends>
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
            </S.mainSection>
        </S.mainContainer>
    );
};

export default RecommendView;