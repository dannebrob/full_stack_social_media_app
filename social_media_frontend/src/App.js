import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./containers/Login";
import { Home } from "./containers/Home";
import Profile from "./components/Profile";
import { client } from "./client";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
