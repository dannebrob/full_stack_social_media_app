import React from "react";
import { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
// import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
// import LoginButton from "../components/LoginButton";
// import LogoutButton from "../components/LogoutButton";

import { client } from "../client";
// import { gapi } from "gapi-script";
// import { client } from '../client';

export const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response.profileObj.name);
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const doc = {
      _id: response.profileObj.googleId,
      _type: "user",
      userName: response.profileObj.name,
      image: response.profileObj.imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// const responseGoogle = (response) => {
//   console.log(response);
//   localStorage.setItem("user", JSON.stringify(response.profileObj));
//   const { name, googleId, imageUrl } = response.profileObj;
//   const doc = {
//     _id: googleId,
//     _type: "user",
//     userName: name,
//     image: imageUrl,
//   };
// client.createIfNotExists(doc).then(() => {     Pasted from github
//   navigate("/", { replace: true });
// });

// useEffect(() => {
//   const start = () => {
//     gapi.client.init({
//       clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
//       scope: "",
//     });
//   };

//   gapi.load("client:auth2", start);
// });

// const { user, isAuthenticated, isLoading } = useAuth0(); //Use when want to use Auth0 to check if logged in (turney op.)

// const navigate = useNavigate();
// if (isAuthenticated) {
//   const doc = {
//     _id: 1,
//     _type: "user",
//     userName: `${user.name}`,
//     image: `${user.picture}`,
//   };
//   client.createIfNotExists(doc).then(() => {
//     navigate("/login", { replace: true });
//   });
// }

// return (
//   <div className="flex justify-start items-center flex-col h-screen">
//     <div className="relative w-full h-full">
//       <video
//         src={shareVideo}
//         type="video/mp4"
//         loop
//         controls={false}
//         muted
//         autoPlay
//         className="w-full h-full object-cover"
//       />

//       <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay">
//         <div className="p-5">
//           <img src={logo} width="130px" alt="Social Media Logo" />
//         </div>
//         <div className="shadow-2x1">
//           {/* <LoginButton /> */}
//           {/* <LogoutButton /> */}
//           {/*For quick logout*/}
//           {/* <GoogleLogin
//             clientId="42827215098-0cfn07hl4fecvoj4se21prge2j64f3j3.apps.googleusercontent.com"
//             render={(renderProps) => (
//               <button
//                 type="button"
//                 className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                 <FcGoogle className="mr-4" /> Sign in with google
//               </button>
//             )}
//             onSuccess={responseGoogle}
//             onFailure={responseGoogle}
//             cookiePolicy="single_host_origin"
//           /> */}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// "You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."
