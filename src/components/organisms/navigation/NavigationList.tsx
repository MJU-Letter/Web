import Image from "next/image";
import React from "react";
import close from "../../../../public/icons/close.png";
import openLink from "../../../../public/icons/openLink.png";

interface navigationListProps {
  user?: {
    major: string;
    studentId: string;
    name: string;
  };
}

const NavigationList = ({ user }: navigationListProps) => {
  return (
    <div className="flex flex-col w-240 h-640 bg-main-point">
      <div className="mb-24">
        <Image className="ml-auto w-24 h-24 m-16" src={close} alt="close" />
      </div>
      {user ? (
        <div className="mx-auto w-191 h-40 rounded-8 bg-white text-gray-dark-text-1 gangwon-xl flex items-center justify-center pt-6">
          {user?.major} {user?.studentId} {user?.name}
        </div>
      ) : (
        <div className="mx-auto w-191 h-40 rounded-8 bg-white text-gray-dark-text-1 gangwon-xl flex items-center justify-center pt-6">
          로그인 하세요!
        </div>
      )}

      <div className="text-white w-191 mx-auto mt-48 ">
        <div className="large-bold mb-16">홈</div>
        <div className="large-bold pb-24 mb-24 border-b-1">마이페이지</div>
        <div className="large-regular mb-16">설정</div>
        <div className="large-regular flex">
          명지편지에 대해서
          <Image className="ml-4 w-24 h-24" src={openLink} alt="openLink" />
        </div>
      </div>
    </div>
  );
};

export default NavigationList;
