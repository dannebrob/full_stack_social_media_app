import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./containers/Login";
import { Home } from "./containers/Home";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";

const App = () => {
  //   const { user, isAuthenticated, isLoading } = useAuth0();  //Use when want to use Auth0 to check if logged in (turney op.)
  //   console.log(isAuthenticated);
  // {isAuthenticated ? <component /> : <component />}
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
