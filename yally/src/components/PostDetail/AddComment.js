import React from 'react';
import * as S from "../../assets/style/Main/AddTimeLine";
import * as C from '../../assets/style/PostDetail/Comment'
import * as R from '../../assets/style/Main/Recommend'

const AddComment = () => {
    return (
        <S.mainContainer detailPost>
            <S.mainSection small>
            <C.commentBox>
                <S.writerInfoBox comment profile>
                    <S.profileImg></S.profileImg>
                    <C.div>
                        <S.form action="" method="post" enctype="multipart/form-data">
                            <S.writerInput placeholder="답글을 입력하세요" type="text" comment name="content">
                            </S.writerInput>
                        </S.form>
                    </C.div>
                    <R.ListeningButton comment>입력</R.ListeningButton>
                </S.writerInfoBox>
            </C.commentBox>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddComment;