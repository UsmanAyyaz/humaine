import React, { Component } from "react";
import styled, { css } from "styled-components";



function TryDemoBtn(props) {

  return (
    <Container  {...props}>
      <Caption >Try a demo!</Caption>
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
  
  color: #fff;
  font-size: 24px;
  line-height: 20px;
`;

export default TryDemoBtn;
