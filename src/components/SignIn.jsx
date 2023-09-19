import React from "react";
import googleIcon from "../assets/image/google.svg";
import appleIcon from "../assets/image/apple.svg";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getRedirectResult, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("user", user.photoURL);
        getRedirectResult(auth).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <div
        className=" flex flex-col w-1/2 bg-[#4285F4] relative text-white"
        style={{
          height: "100vh",
          clipPath: "polygon(0% 0%, 100% 0%, 75% 100%, 0% 100% )",
        }}
      >
        <h3 className="absolute top-16 left-20 text-2xl font-bold">Logo</h3>
        <h1 className="absolute bottom-1/2 left-44 text-7xl font-bold ">
          Board.
        </h1>
        <div className="flex flex-wrap justify-between m-auto absolute bottom-16 w-80 left-36">
          <i className="fa-brands fa-github text-4xl"></i>
          <i className="fa-brands fa-twitter text-4xl"></i>
          <i className="fa-brands fa-linkedin text-4xl"></i>
          <i className="fa-brands fa-discord text-4xl"></i>
        </div>
      </div>
      <div className="w-1/2 flex flex-col my-auto items-start">
        <h1 className="ml-24 text-4xl mb-1.5 font-bold">Sign In</h1>
        <h3 className="ml-24 text-base mb-7 font-normal">
          Sign in to your account
        </h3>
        <div className="w-6/12 flex justify-between ml-24 mb-9">
          <button
            className="bg-white text-[#858585] flex text-sm py-2 px-7 rounded-md"
            onClick={googleSignIn}
          >
            <img className="w-4 mr-2.5" src={googleIcon} alt="" />
            Sign in With Google
          </button>
          <button className="bg-white text-[#858585] flex text-sm py-2 px-7 rounded-md">
            <img className="w-4 mr-2.5" src={appleIcon} alt="" />
            Sign in With Apple
          </button>
        </div>
        <div className="w-6/12 bg-white rounded-lg px-8 py-5 ml-24 mb-6">
          <div className="items-start">
            <label
              className="text-base text-left float-left"
              htmlFor="staticEmail"
            >
              Email Address
            </label>
            <div>
              <input
                className="bg-[#EAEAEA] rounded-md w-full mb-3 mt-2.5 h-11 px-4"
                type="text"
                id="staticEmail"
                value='johndoe@gmail.com'
                onChange={()=>console.log()}
              />
            </div>
          </div>
          <div>
            <label className="text-base float-left" htmlFor="inputPassword">
              Password
            </label>
            <div>
              <input
                className="bg-[#EAEAEA] rounded-md w-full mt-2.5 mb-3 h-11 px-4"
                type="password"
                id="inputPassword"
                value='12345678'
                onChange={()=>console.log()}
              />
            </div>
          </div>
          <a href="/" className="text-[#346BD4] float-left">
            Forget Password?
          </a>
          <button className="bg-[#4285F4] text-white rounded-md w-full m-3 h-11 font-bold">
            Sign In
          </button>
        </div>
        <div className="ml-24 mx-auto w-6/12">
          <p>
            Don't have an account?
            <a className="text-[#346BD4] text-base" href="/">
              {" "}
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
