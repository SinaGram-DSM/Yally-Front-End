import React from 'react';
import * as T from '../../assets/style/UserPage/Listen';
import * as L from '../../assets/style/UserPage/PageStyle';

const ListenerList = () => {
    return(
        <T.listenSection>
            <T.containerBox>
                <T.itemBox>
                  <T.boxImg/>  
                <T.userBox>
                    <T.name>최수빈</T.name>
                    <L.Listen list>
                        <L.Listening listen>리스닝 123</L.Listening>
                        <L.Listener listen>리스너 456</L.Listener>
                    </L.Listen>
                </T.userBox>
                
                </T.itemBox>
                <T.listenBtn>리스닝</T.listenBtn>
            </T.containerBox>
            <T.containerBox>
                
                </T.containerBox>
                
            <T.containerBox>
                
                </T.containerBox>
      
                
        </T.listenSection>
    )
}

export default ListenerList;