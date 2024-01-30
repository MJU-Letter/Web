import Image, { StaticImageData } from "next/image";
import React from "react";

interface mainProfileProps {
  profileImg: StaticImageData | string;
  name: string;
  major: string;
  studentId: string;
}

const MainProfile = ({
  profileImg,
  name,
  major,
  studentId,
}: mainProfileProps) => {
  return (
    <div className="w-148 h-216 flex flex-col items-center justify-center bg-white rounded-8">
      <Image
        className="w-76 h-76 rounded-[50%] object-contain mb-8"
        src={profileImg}
        alt="main profileImg"
      />
      <h1 className="text-gray-dark-text-1 gangwon-xl mb-[-8px]">{name}</h1>
      <h2 className="text-gray-dark-text-1 gangwon-large">
        {major} {studentId}
      </h2>
      <div className="w-108 h-30 bg-main-point small-regular text-white rounded-15 mt-16 flex justify-center items-center cursor-pointer">
        보러가기
      </div>
    </div>
  );
};

export default MainProfile;
