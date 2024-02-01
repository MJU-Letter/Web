import Image, { StaticImageData } from "next/image";
import React from "react";
import instagram from "../../../../../public/icons/instagram.png";

interface DetailProfileProps {
  profileImg: StaticImageData | string;
  name: string;
  major: string;
  studentId: string;
  instagramId?: string;
}

const DetailProfile = ({
  profileImg,
  name,
  major,
  studentId,
  instagramId,
  ...props
}: DetailProfileProps) => {
  return (
    <div className="w-320 h-117 rounded-12 bg-main-white flex items-center justify-center">
      <Image
        className="rounded-[50%] mr-16 object-contain"
        src={profileImg}
        alt="profileImg"
      />
      <div>
        <div className="flex text-gray-dark-text-1 whitespace-pre-wrap">
          <h1 className="large-bold">{name}</h1>
          <h1 className="large-regular"> 님의 롤링페이퍼</h1>
        </div>
        <h2 className="small-regular">
          {major} {studentId}
        </h2>
        {instagramId && (
          <div className="flex items-center text-center mt-8">
            <Image
              className="w-18 h-18 mr-4"
              src={instagram}
              alt="instagram logo"
            />
            <h3 className="gangwon-medium">{instagramId}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProfile;
