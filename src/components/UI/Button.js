import React from "react";
import styled from "styled-components";

const Btn = () => {
  return (
    <div>
      <Bton>войти</Bton>
    </div>
  );
};
export default Btn;

const Bton = styled.button`
  background: rgba(84, 88, 234, 1);
  width: 335px;
  height: 44px;
  border-radius: 80px;
  gap: 10px;
  border: none;
  color: white;
`;
