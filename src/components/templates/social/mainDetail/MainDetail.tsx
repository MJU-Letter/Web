"use client";
import React, { useState } from "react";
import test from "../../../../../public/icons/testProfile.png";

import { useDisclosure } from "@nextui-org/react";
import ModalView from "@/components/molecules/modal/ModalView";
import BottomFixedBtn from "@/components/atoms/button/bottomFixed/BottomFixed";
import Letter from "@/components/atoms/letter/Letter";
import DetailProfile from "@/components/atoms/profile/detailProfile/DetailProfile";
import WriteModal from "@/components/organisms/modal/letter/writeModal/WriteModal";

const MainDetail = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleYesClick = () => {
    console.log("Yes button clicked!");
  };
  const handleNoClick = () => {
    console.log("No button clicked!");
  };
  return (
    <>
      <ModalView
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        children={<WriteModal />}
        yesBtn={{ info: "확인", handler: handleYesClick }}
        noBtn={{ info: "취소", handler: handleNoClick }}
      />
      <div className="relative tablet:min-h-full w-360 flex flex-col items-center justify-start">
        <div className="mb-28">
          <DetailProfile
            profileImg={test}
            name={"이보현"}
            major={"경영학과"}
            studentId={"19"}
          />
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="">
            <div className="mb-16">
              <Letter
                letterText={
                  "안!~!~!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>{" "}
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="blue"
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={"안녕 말걸지마~~!~!~!~!~!~!~!"}
                backgroundColor="yellow"
                isMine={false}
              />
            </div>{" "}
            <div className="mb-16">
              <Letter
                letterText={
                  "안!~!~!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="blue"
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>{" "}
          </div>
          <div className="">
            <div className="mb-16">
              <Letter
                letterText={"안녕 말걸지마~~!~!~!~!~!~!~!"}
                isMine={false}
                backgroundColor={"red"}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안!~!~!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="blue"
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>{" "}
            <div className="mb-16">
              <Letter
                letterText={
                  "안!~!~!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="blue"
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>{" "}
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor="green"
                isMine={false}
              />
            </div>
          </div>
        </div>
        <button onClick={onOpen} className="m-16 sticky bottom-10 ml-auto ">
          <BottomFixedBtn usage={"write"} />
        </button>
      </div>
    </>
  );
};

export default MainDetail;
