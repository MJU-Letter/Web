import Image from "next/image";
import React from "react";
import noticeOn from "../../../../../public/icons/noticeOn.png";
import noticeOff from "../../../../../public/icons/noticeOff.png";

interface noticeIconProps {
  isOn: boolean;
}

const NoticeIcon = ({ isOn }: noticeIconProps) => {
  return isOn ? (
    <Image className="w-24 h-24" src={noticeOn} alt="noticeOnIcon" />
  ) : (
    <Image className="w-24 h-24" src={noticeOff} alt="noticeOffIcon" />
  );
};

export default NoticeIcon;
