import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/common/Menu";
import Footer from "../components/common/Footer";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
