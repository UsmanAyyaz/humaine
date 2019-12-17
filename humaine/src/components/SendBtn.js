import React, { Component } from "react";
import styled, { css } from "styled-components";

function SendBtn(props) {
  return (
    <Container {...props}>
      <Caption>Send</Caption>
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
  border-radius: 2px;
  
`;

const Caption = styled.span`
  font-weight:600;
  color: #fff;
  font-size: 20px;
  line-height: 27px;
`;

export default SendBtn;
