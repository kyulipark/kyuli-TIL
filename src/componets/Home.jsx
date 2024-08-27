import React from "react";
import Footer from "./Footer";
import MyLayout from "./MyLayout";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <MyLayout />
      <div>Home</div>
      <Footer />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 100vh;
`;
