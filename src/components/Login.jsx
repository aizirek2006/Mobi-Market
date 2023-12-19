import React from "react";
import styled from "styled-components";
import Photobackground from "../assets/icon/Photolog/Photobackground.svg";

const Login = () => {
  return (
    <ImgStyle>
      <img src={Photobackground} alt="" />
    </ImgStyle>
  );
};
export default Login;

const ImgStyle = styled.div`
  width: 720px;
  height: 1024px;
  
`;
