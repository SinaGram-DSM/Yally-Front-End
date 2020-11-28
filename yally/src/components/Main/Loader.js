import React from "react";
import * as S from "../../assets/style/Main/AddTimeLine";

const Loader = () => {
  return (
    <div style={{display : "flex", justifyContent : "center"}}>
      <S.loader class="loader"></S.loader>
    </div>
  );
};

export default Loader;
