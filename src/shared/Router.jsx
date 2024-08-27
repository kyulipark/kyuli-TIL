import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componets/Home";
import MyLayout from "../componets/MyLayout";
import MyProfile from "../componets/MyProfile";
import MyLike from "../componets/MyLike";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<MyLayout />}>
          <Route path="profile" element={<MyProfile />} />
          <Route path="like" element={<MyLike />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
