"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrowRight from "../../../../public/icons/arrowRight.png";
import Toggle from "@/components/atoms/button/toggle/Toggle";
import Link from "next/link";

const Setting = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="text-main-point flex flex-col items-center w-360 min-h-584">
      <h1 className="large-bold mb-28 text-center">설정</h1>
      <div className="pl-24 pr-20 flex flex-col justify-center items-center w-360">
        <div className="w-full h-54 mb-4 flex items-center justify-between">
          <h2 className="medium-bold">프로필 수정하기</h2>

          <Link href={"setting/profile"}>
            <Image className="w-24 h-24" src={arrowRight} alt="arrowRight" />
          </Link>
        </div>
        <div className="w-full h-90 flex flex-col justify-center mb-4">
          <h2 className="medium-bold mb-12">알림 설정</h2>
          <div className="flex justify-between">
            <h3 className="medium-regular">이메일 알림 수신</h3>
            <button>
              <Toggle isOn={isOn} toggleFn={() => setIsOn(!isOn)} />
            </button>
          </div>
        </div>
        <div className="w-full h-126 flex flex-col justify-center ">
          <h2 className="medium-bold mb-12">서비스 정보</h2>
          <div className="flex justify-between mb-14">
            <h3 className="medium-regular">서비스 이용 약관</h3>
            <button>
              <Image className="w-24 h-24" src={arrowRight} alt="arrowRight" />
            </button>
          </div>
          <div className="flex justify-between">
            <h3 className="medium-regular">개인정보 처리방침</h3>
            <button>
              <Image className="w-24 h-24" src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        </div>
        <button className="mt-20 mr-auto">
          <h3 className="medium-regular">로그아웃</h3>
        </button>
        <button className="mt-16 mr-auto">
          <h3 className="medium-regular">탈퇴하기</h3>
        </button>
      </div>
    </div>
  );
};

export default Setting;
