import Image from "next/image";
import Link from "next/link";
import React from "react";
import close from "../../../../public/icons/close.png";
import openLink from "../../../../public/icons/openLink.png";

interface NavigationListProps {
  user?: {
    major: string;
    studentId: string;
    name: string;
  };
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}

const NavigationList = ({
  user,
  isOpened,
  setIsOpened,
}: NavigationListProps) => {
  return (
    <div className="fixed z-navigatoinList bg-[#00000030] top-0 right-0 w-full h-full ">
      <div className="absolute right-0 flex flex-col w-240 h-screen bg-main-point">
        <div
          className="mb-24 cursor-pointer"
          onClick={() => setIsOpened(false)}
        >
          <Image className="ml-auto w-24 h-24 m-16" src={close} alt="close" />
        </div>
        {user ? (
          <div className="mx-auto w-191 h-40 rounded-8 bg-white text-gray-dark-text-1 gangwon-xl flex items-center justify-center pt-6">
            {user?.major} {user?.studentId} {user?.name}
          </div>
        ) : (
          <Link href={"login"}>
            <div className="mx-auto w-191 h-40 rounded-8 bg-white text-gray-dark-text-1 gangwon-xl flex items-center justify-center pt-6">
              로그인 하세요!
            </div>{" "}
          </Link>
        )}

        <div className="text-white w-191 mx-auto mt-48 ">
          <Link href={"/"}>
            <h1 className="large-bold mb-16">홈</h1>
          </Link>
          <Link href={"/mypage"}>
            <h1 className="large-bold pb-24 mb-24 border-b-1">마이페이지</h1>
          </Link>
          <Link href={"/setting"}>
            <h1 className="large-regular mb-16">설정</h1>
          </Link>
          <Link href={"/"}>
            <h1 className="large-regular flex">
              명지편지에 대해서
              <Image className="ml-4 w-24 h-24" src={openLink} alt="openLink" />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationList;
