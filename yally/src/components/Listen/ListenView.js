import React from 'react';
import * as L from '../../assets/style/UserPage/Listen';
import * as M from '../../assets/style/Main/AddTimeLine';
import Listener from './Listener';
import Listening from './Listening';

const ListenView = () => {
    const listen = false; //리스닝 목록인지 리스너 목록인지 구분. 추후에 라우터 링크의 params 값
    return(
        <div>
        <M.mainContainer>
            <L.mainSection>
            <L.profileSection>
            <L.profileImg></L.profileImg>
            {listen ?  
            <L.comment>3명이 마멜공주 님의 이야기를 듣고 있습니다.</L.comment> :
            <L.comment>마멜공주 님이 3명의 이야기를 듣고 있습니다.</L.comment>}
            </L.profileSection>
            {listen ?
             <Listener/> :  <Listening/>}
            
            </L.mainSection>
        </M.mainContainer>
        </div>
    )
}

export default ListenView;