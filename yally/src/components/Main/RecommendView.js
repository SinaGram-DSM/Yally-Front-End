import React, {useState, useEffect} from 'react';
import Recommended from './Recommended';
import * as S from "../../assets/style/Main/AddTimeLine";
import { getFriend } from '../../api/timeline';
import { refreshToken } from '../../api/user';

const RecommendView = ({ baseUrl}) => {
    const [recommend, setRecommend] = useState([]);

    useEffect(() => {
        getFriend()
        .then((res) => {
            setRecommend(res.data.friends);
        })
        .catch((err) => {
            if(err.status === 403) {
                refreshToken();
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <S.mainContainer friends>
            <S.mainSection friends>
            {recommend.map((r) => (
                <Recommended
                baseUrl={baseUrl}
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