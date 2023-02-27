import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Extract from "../pages/Extract";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Operations from "../pages/Operations";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";

const RoutesPages = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={<Login />} />

        <Route path="signUp" element={<SignUp />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="operations" element={<Operations />} />

        <Route path="profile" element={<Profile />} />

        <Route path="extract" element={<Extract />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPages;
