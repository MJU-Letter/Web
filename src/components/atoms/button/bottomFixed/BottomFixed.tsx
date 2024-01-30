import React from "react";
import write from "../../../../../public/icons/write.png";
import share from "../../../../../public/icons/share.png";
import Image from "next/image";

interface bottomFixedBtnProps {
  usage: "write" | "share";
}

const BottomFixedBtn = ({ usage }: bottomFixedBtnProps) => {
  return (
    <div className="w-56 h-56 rounded-[50%] bg-main-point flex items-center justify-center">
      {usage === "write" ? (
        <Image className="w-32 h-32" src={write} alt="write btn" />
      ) : (
        <Image className="w-32 h-32" src={share} alt="share btn" />
      )}
    </div>
  );
};

export default BottomFixedBtn;
