import styled from "styled-components";
import { config } from "../config";
import { useState } from "react";

const Footer = () => {
  return (
    <StyledFooter>
      <h4>wheather</h4>
      <div>
        <input type="text" placeholder="현재 위치를 입력하세요." />
        <button>검색</button>
      </div>
      <p>Seoul, Korea</p>
      <p>26°C</p>
      <p>Sunny</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vh;
  height: 200px;
  border-radius: 20px;

  color: wheat;
  * {
    margin: 3px;
  }
`;
