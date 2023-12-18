import React from "react";
import styled from "styled-components";
import back from "../assets/back.png";

const Login = () => {
  return (
    <div>
      <ImgStyle>
        <img src={back} alt="" />
      </ImgStyle>
    </div>
  );
};
export default Login;

const ImgStyle = styled`
     width: 100;
`;
