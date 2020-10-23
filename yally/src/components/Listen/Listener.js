import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as T from '../../assets/style/UserPage/Listen';
import * as L from '../../assets/style/UserPage/PageStyle';
import * as M from '../../assets/style/Main/AddTimeLine';

const Listener = (baseUrl) => {
    let [listener, setListener] = useState({
        nickname: "",
        listenerValue: 0,
        listening: 0,
        isListening: true 
    });

    // const email = this.props.match; 라우터 주소에서 이메일 가져오기 
    

    const config = {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'
        }
    }

    useEffect (() => {
        
        axios.get(baseUrl + "/profile/admin123@gmail.com", config)
        .then((res) => {
            setListener({
                ...listener, 
                nickname: res.data.listeners.nickname, 
                listenerValue: res.data.listeners.listener,
                listening: res.data.listeners.listening,
                isListening: res.data.listeners.isListening
            })
            console.log(res.data.listeners);
        })
    }) 
    return(

        <M.mainContainer>
        <T.mainSection>
        <T.profileSection>
        <T.profileImg></T.profileImg>
        <T.comment>{listener.listenerValue}명이 마멜공주 님의 이야기를 듣고 있습니다.</T.comment>
        </T.profileSection>
        <T.listenSection>
            <T.containerBox>
                <T.itemBox>
                  <T.boxImg/>  
                <T.userBox>
                    <T.name>{listener.nickname}</T.name>
                    <L.Listen list>
                        <L.Listening listen>리스닝 {listener.listenerValue}</L.Listening>
                        <L.Listener listen>리스너 {listener.listening}</L.Listener>
                    </L.Listen>
                </T.userBox>
                
                </T.itemBox>
                {listener.isListening ? 
                <T.listenBtn>리스닝</T.listenBtn> :
                <T.unlistenBtn>언리스닝</T.unlistenBtn> }
            </T.containerBox>
            <T.containerBox>
                
                </T.containerBox>
                
            <T.containerBox>
                
                </T.containerBox>
      
                
        </T.listenSection>
        </T.mainSection>
    </M.mainContainer>
    )
}

export default Listener;