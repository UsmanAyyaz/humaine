import React, { Component } from "react";
import styled, { css } from "styled-components";

function EasyBtn(props) {
  return (
    <Container {...props}>
      <Caption>Easy</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(91,184,93,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 60px;
  border-radius: 100px;
 z-index:1;
`;

const Caption = styled.span`
  
  color: #fff;
  font-size: 18px;
`;

export default EasyBtn;
