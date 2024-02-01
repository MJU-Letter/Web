import NoticeIcon from "../../atoms/notice/noticeIcon/NoticeIcon";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/icons/logo.png";
import menu from "../../../../public/icons/menu.png";
import NavigationList from "./NavigationList";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      {isOpened && <NavigationList />}
      <div className="flex items-center  w-368 h-56 py-12 px-16 bg-main-background">
        <div onClick={handleIsOpened}>
          <Image className="w-67 h-32 mr-200" src={logo} alt="logo" />
        </div>
        <div className="flex">
          <NoticeIcon isOn={false} />
          <Image className="ml-12 w-24 h-24" src={menu} alt="menu" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
