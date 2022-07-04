import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Auth0Provider
      domain="dev-v60nug6d.us.auth0.com"
      clientId="hVtoIQvINE3jXgKR6exylFsJHjS4LpAa"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>
);
