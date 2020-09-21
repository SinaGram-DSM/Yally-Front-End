import React from 'react';
import * as L from '../../assets/style/UserPage/Listen';
import * as M from '../../assets/style/Main/AddTimeLine';
import ListenerList from './ListenerList';

const Listener = () => {
    return(
        <div>
        <M.mainContainer>
            <L.mainSection>
            <L.profileSection>
            <L.profileImg></L.profileImg>
            <L.comment>3명이 마멜공주 님의 이야기를 듣고 있습니다.</L.comment>
            </L.profileSection>
            <ListenerList/>
            </L.mainSection>
        </M.mainContainer>
        </div>
    )
}

export default Listener;