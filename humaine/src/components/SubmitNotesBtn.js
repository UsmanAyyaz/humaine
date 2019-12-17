import React, { Component } from "react";
import styled, { css } from "styled-components";

function SubmitNotesBtn(props) {
  return (
    <Container {...props}>
      <Caption>SUBMIT</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(95,180,246,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 60px;
  border-radius: 10px;
border:1px solid black;
 
`;

const Caption = styled.span`
  
  color: #fff;
  font-size: 18px;
`;

export default SubmitNotesBtn;
