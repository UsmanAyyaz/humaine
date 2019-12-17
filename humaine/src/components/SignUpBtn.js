import React, { Component } from "react";
import styled, { css } from "styled-components";

function SignUpBtn(props) {
  return (
    <Container {...props}>
      <Caption>Sign up!</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(130,192,242,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 88px;
  border-radius: 2px;
  
`;

const Caption = styled.span`

  color: #fff;
  font-size: 24px;
  line-height: 20px;
`;

export default SignUpBtn;
