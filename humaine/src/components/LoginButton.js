import React, { Component } from "react";
import styled, { css } from "styled-components";

function LoginButton(props) {
  return (
    <Container {...props}>
      <Caption>Login</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #2196F3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 88px;
  border-radius: 6px;
 
`;

const Caption = styled.span`
  
  color: #fff;
  margin: 0px;
  font-size: 21px;
  font-weight: 700;
  font-style: normal;
  line-height: 27px;
`;




export default LoginButton;
