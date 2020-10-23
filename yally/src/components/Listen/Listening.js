import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as T from '../../assets/style/UserPage/Listen';
import * as L from '../../assets/style/UserPage/PageStyle';
import * as M from '../../assets/style/Main/AddTimeLine';

const Listening = () => {
    const isListen = false; //리슨 버튼 언리스닝 리스닝 여부 확인 값
    let [listening, setListening] = useState({
        nickname: "",
        listener: 0,
        listeningValue: 0,
        isListening: true 
    });

    const config = {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDEzNTAyNzUsIm5iZiI6MTYwMTM1MDI3NSwianRpIjoiNjM1ZTk3OWItNjczZC00ZmI5LTg3MmEtZDE2MjdjNGQyYTBlIiwiZXhwIjoxNjA5OTkwMjc1LCJpZGVudGl0eSI6ImFkbWluQGdtYWlsLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.3fLkBFWZ9N0Cq0xGEXZzVeKjNvkqkVdREsMOJwbtzy8'
        }
    }

    useEffect(() => {
        axios.get("http://13.125.238.84:81/profile/admin123@gmail.com/", config)
        .then((res) => {
            setListening({
                ...listening,
                nickname: res.data.listener.nickname,
                listener: res.data.listeners.listener,
                listeningValue: res.data.listeners.listening,
                isListening: res.data.listeners.isListening
            })
            console.log(res.data);
        })
    })
    return(
        <M.mainContainer>
        <T.mainSection>
        <T.profileSection>
        <T.profileImg></T.profileImg>
        <T.comment>마멜공주 님이 {listening.listeningValue}명의 이야기를 듣고 있습니다.</T.comment>
        </T.profileSection>
        <T.listenSection>
        <T.containerBox>
            <T.itemBox>
              <T.boxImg/>  
            <T.userBox>
                <T.name>{listening.nickname}</T.name>
                <L.Listen list>
                    <L.Listening listen>리스닝{listening.listeningValue}</L.Listening>
                    <L.Listener listen>리스너 {listening.listener}</L.Listener>
                </L.Listen>
            </T.userBox>
            </T.itemBox>
            {isListen ? 
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
    );
}

export default Listening;