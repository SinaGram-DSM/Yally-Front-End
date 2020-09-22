import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import { mic, sound, picture } from '../../assets/img'

const AddPost = () => {
    return (
        <S.mainContainer>
            <S.mainSection>
                <S.writerInfoBox>
                    <S.profileImg>

                    </S.profileImg>
                    <S.form action="">
                        <S.writerInput placeholder="이야기를 들려주세요!" type="text">
                        </S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer>
                        <S.buttonBox>
                            <S.buttonIcon src={mic}></S.buttonIcon>
                            녹음
                        </S.buttonBox>
                        <S.buttonBox>
                            <S.buttonIcon src={sound}></S.buttonIcon>
                            음성 파일
                        </S.buttonBox>
                        <S.buttonBox>
                            <S.buttonIcon src={picture}></S.buttonIcon>
                            음성 커버
                        </S.buttonBox>
                    </S.buttonsContainer>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;