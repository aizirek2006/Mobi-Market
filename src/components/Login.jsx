import React, { useState } from "react";
import styled from "styled-components";
import Photobackground from "../assets/icon/Photolog/Photobackground.svg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <Icon src={Photobackground} alt="" />

      <FormGroup>
        <InputContainer>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <InputLabel htmlFor="name">Имя пользователя</InputLabel>
        </InputContainer>

        <PasswordInputContainer>
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Pin"
            id="pin"
            required
          />
          <InputLabel htmlFor="pin">Пароль</InputLabel>
          <VisibilityButton onClick={togglePasswordVisibility}>
            {passwordVisible ? "Скрыть" : "Показать"}
          </VisibilityButton>
        </PasswordInputContainer>
      </FormGroup>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: white;
  display: flex;
  align-items: center; /* Center vertically */
`;

const Icon = styled.img`
  height: 99vh;
`;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const PasswordInputContainer = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #242424;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  /* reset input */
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`;

const VisibilityButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #9b9b9b;

  &:focus {
    outline: none;
  }
`;

export default Login;
