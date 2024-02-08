"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface profileSettingProps {
  name: string;
  major: string;
  studentId: string;
  instagramId?: string;
  profileImg: StaticImageData | string;
  setInstagramId: (instagramId: string) => void;
}

const ProfileSetting = ({
  name,
  major,
  studentId,
  instagramId,
  profileImg,
  setInstagramId,
}: profileSettingProps) => {
  const handleInstagramId = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) {
      // 입력값의 길이가 10자를 초과하면
      alert("최대 30자까지만 입력 가능합니다."); // 경고창을 띄웁니다.
    } else {
      setInstagramId(e.target.value);
    }
  };
  return (
    <div className="w-360 flex flex-col justify-center items-center">
      <h1 className="large-bold text-main-point ">프로필 설정</h1>
      <Image
        className="mt-58 mb-40  border-8 border-white shadow-sm w-134 h-134 rounded-[50%] object-contain"
        src={profileImg}
        alt="profileImg"
      />
      <div className="flex flex-col">
        <div className="flex items-start mb-8">
          <h2 className="medium-medium text-main-point mr-67">이름</h2>
          <h3 className="text-main-point medium-regular">{name}</h3>
        </div>

        <div className="flex items-start mb-52">
          <h2 className="medium-medium text-main-point mr-36">학과/학번</h2>
          <div>
            <h3 className="mb-8 text-main-point medium-regular">
              {major} {studentId}
            </h3>
            <h4 className=" text-gray-medium-text-2 text-11">
              이름과 학과/학번 수정은 불가능해요.
            </h4>
          </div>
        </div>

        <div className="flex items-start">
          <h2 className="medium-medium text-main-point mr-24">인스타그램</h2>
          <div>
            <input
              onChange={handleInstagramId}
              placeholder="인스타그램 아이디를 입력하세요."
              value={instagramId}
              className="pl-4 mb-8 bg-transparent focus:outline-none border-b-1 pb-8 w-210 border-main-point  placeholder:text-gray-medium-text-2 medium-regular text-main-point medium-regular"
            />
            <h4 className="text-gray-medium-text-2 text-11">
              인스타그램 ID 입력은 자유예요.
            </h4>
          </div>
        </div>
      </div>
      <button className="w-248 h-44 rounded-8 flex items-center justify-center bg-main-point text-white medium-regular mt-79">
        확인
      </button>
    </div>
  );
};

export default ProfileSetting;
