import React from 'react';
import * as P from '../../assets/style/UserPage/ProfileSetting'
import * as M from '../../assets/style/Main/AddTimeLine';
import {test, profileEdit} from '../../assets/img';


const Setting = () => {
    return(
        <P.settingContainer>
            <P.settingSection>
                <P.topSection>
                    <P.title>Account Setting</P.title>
                    <P.headerBorder></P.headerBorder>
                </P.topSection>
                <P.profileSection>
                        <P.imgInput id="input-img"></P.imgInput>
                        <P.imgChange>
                            <P.imgBox>
                                <P.profileChange src={profileEdit} />
                                <P.profileImge src={test}/>
                            </P.imgBox>
                        </P.imgChange>
                </P.profileSection>
                <P.nameBox>
                    <P.nickname placeholder="데인드한" onfocus=""/>
                </P.nameBox>
                
            </P.settingSection>
        </P.settingContainer>
    );
}

export default Setting;