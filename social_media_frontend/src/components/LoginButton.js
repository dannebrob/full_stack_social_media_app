import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="text-black bg-white rounded-lg flex w-60 justify-around items-center p-4 "
    >
      <FcGoogle />
      Sign in with Google
    </button>
  );
};

export default LoginButton;
