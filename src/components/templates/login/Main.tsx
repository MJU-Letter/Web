"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/icons/logo.png";
import loginImg from "../../../../public/icons/loginImg.png";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-360 min-h-640 flex flex-col items-center justify-center">
      <Image className="w-228 h-108 object-contain" src={logo} alt="logo" />
      <h1 className="mt-20 mb-116 gangwon-xl text-main-point">
        명지인들과 롤링페이퍼로 마음을 나눠요
      </h1>
      <Link href={"/login/auth"}>
        <button>
          <Image src={loginImg} alt="loginImg" />
        </button>
      </Link>

      <h2 className="w-284 mt-8 flex text-11 text-gray-medium-text-2 flex-wrap whitespace-pre-line">
        시작할 경우, 명지편지의
        <div className="ml-[3.5px] border-b-1 border-gray-medium-text-2 whitespace-pre-line">
          서비스 이용약관
        </div>
        과
        <div className="ml-[3.5px] border-b-1 border-gray-medium-text-2 whitespace-pre-line">
          개인정보 보호정책
        </div>
        에 동의하게 됩니다.
      </h2>
    </div>
  );
};

export default Main;
