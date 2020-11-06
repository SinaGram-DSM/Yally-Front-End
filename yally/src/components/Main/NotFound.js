import React from "react";
import * as S from "../../assets/style/Main/AddTimeLine";

const NotFound = ({ status }) => {
  return (
    <div style={{ textAlign: "center"}}>
      <S.notFoundTitle>{status}</S.notFoundTitle>
      <S.notFoundText>{status == null ? "LOADING..." : "NOT FOUND"}</S.notFoundText>
    </div>
  );
};

export default NotFound;
