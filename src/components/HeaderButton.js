import React from "react";
import styled from "styled-components";

const HeaderButton = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  padding: 9px 22px;
  display: flex;
  align-items: center;
`;
const SignUp = styled.p`
  font-family: "Comfortaa";
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const HeaderButtonComponent = () => {
  return (
    <HeaderButton>
      <SignUp>Buy App</SignUp>
    </HeaderButton>
  );
};

export default HeaderButtonComponent;
