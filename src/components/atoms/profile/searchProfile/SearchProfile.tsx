import Image, { StaticImageData } from "next/image";
import arrowRight from "../../../../../public/icons/arrowRight.png";
import React from "react";

interface searchProfileProps {
  profileImg: StaticImageData | string;
  name: string;
  major: string;
  studentId: string;
}

const SearchProfile = ({
  profileImg,
  name,
  major,
  studentId,
}: searchProfileProps) => {
  return (
    <div className="w-288 h-90 bg-white rounded-8 flex items-center p-16">
      <Image
        className="w-58 h-58 rounded-[50%] object-contain ml-4 mr-16"
        src={profileImg}
        alt="search profile Img"
      />
      <div className="text-gray-dark-text-1">
        <h1 className="medium-bold">{name}</h1>
        <h2 className="small-regular">
          {major} {studentId}
        </h2>
      </div>
      <Image className="w-24 h-24 ml-auto" src={arrowRight} alt="arrowRight" />
    </div>
  );
};

export default SearchProfile;
