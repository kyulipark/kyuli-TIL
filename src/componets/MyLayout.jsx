import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyLayout = () => {
  const navigate = useNavigate();
  return (
    <StyledLayout>
      <h1>MyLayout</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈
      </button>
      <button
        onClick={() => {
          navigate("/my/profile");
        }}
      >
        프로필
      </button>
      <button
        onClick={() => {
          navigate("/my/like");
        }}
      >
        좋아요
      </button>
      <Outlet />
    </StyledLayout>
  );
};

export default MyLayout;

const StyledLayout = styled.div`
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 60px;
  border-radius: 20px;

  button {
    background-color: tomato;
    color: white;
    height: 30px;
    margin: 20px;
  }
`;
