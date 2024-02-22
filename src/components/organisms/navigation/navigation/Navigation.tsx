"use client";
import NoticeIcon from "../../../atoms/notice/noticeIcon/NoticeIcon";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@public/icons/logo.png";
import menu from "@public/icons/menu.png";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import NavigationList from "../navigationList/NavigationList";

import ModalPortal from "@/utils/ModalPortal";
import useDeviceType from "@/hooks/useDeviceType";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const deviceType = useDeviceType();
  const handleIsOpened = () => {
    setIsOpened(!isOpened);
  };
  const searchParams = useSearchParams();
  const handleCloseNavigation = () => {
    setIsOpened(false);
  };
  useEffect(() => {
    handleCloseNavigation();
  }, [searchParams]);

  return (
    <>
      <div className="relative z-header box-border">
        <ModalPortal>
          {isOpened && (
            <NavigationList isOpened={isOpened} setIsOpened={setIsOpened} />
          )}
        </ModalPortal>

        <div className="fixed z-header  flex items-center w-360 justify-between h-56 py-12 px-16 bg-main-background box-border">
          <Link href={"/"}>
            <Image className="w-67 h-32" src={logo} alt="logo" />
          </Link>
          <div className="flex">
            <Link href={"/notice"}>
              <NoticeIcon isOn={false} />
            </Link>
            <Image
              className="ml-12 w-24 h-24 cursor-pointer"
              onClick={handleIsOpened}
              src={menu}
              alt="menu"
            />
          </div>
        </div>
      </div>
      {/* {isOpened && (
        <div className="relative">
          <NavigationList isOpened={isOpened} setIsOpened={setIsOpened} />
        </div>
      )}
      <div className="fixed z-header  flex items-center w-360 justify-between h-56 py-12 px-16 bg-main-background box-border">
        <Link href={"/"}>
          <Image className="w-67 h-32" src={logo} alt="logo" />
        </Link>
        <div className="flex">
          <Link href={"/notice"}>
            <NoticeIcon isOn={false} />
          </Link>
          <Image
            className="ml-12 w-24 h-24 cursor-pointer"
            onClick={handleIsOpened}
            src={menu}
            alt="menu"
          />
        </div>
      </div> */}
    </>
  );
};
export default Navigation;
