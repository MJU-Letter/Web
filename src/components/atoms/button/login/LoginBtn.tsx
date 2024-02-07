import Image from "next/image";
import React from "react";
import loginImg from "../../../../../public/icons/loginImg.png";

interface loginBtnProps {
  loginHandler: () => void;
}

const LoginBtn = ({ loginHandler }: loginBtnProps) => {
  return (
    <div onClick={loginHandler} className="w-300 h-45">
      <Image src={loginImg} alt="loginBtn" />
    </div>
  );
};

export default LoginBtn;
