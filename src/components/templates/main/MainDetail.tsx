"use client";
import DetailProfile from "../../atoms/profile/detailProfile/DetailProfile";
import React from "react";
import test from "../../../../public/icons/testProfile.png";
import Letter from "../../atoms/letter/Letter";
import BottomFixedBtn from "../../atoms/button/bottomFixed/BottomFixed";

const MainDetail = () => {
  return (
    <>
      <div className="mt-20 relative  w-360 flex flex-col items-center justify-start">
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
                backgroundColor={"#F0D36D"}
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor={"#F39889"}
                isMine={false}
              />
            </div>

            <div className="mb-16">
              <Letter
                letterText={"안녕 말걸지마~~!~!~!~!~!~!~!"}
                backgroundColor={"#9BC9E6"}
                isMine={false}
              />
            </div>
          </div>
          <div className="">
            <div className="mb-16">
              <Letter
                letterText={"안녕 말걸지마~~!~!~!~!~!~!~!"}
                backgroundColor={"#F39889"}
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안!~!~!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸!~!~!안녕 녕  말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor={"#F0D36D"}
                isMine={false}
              />
            </div>
            <div className="mb-16">
              <Letter
                letterText={
                  "안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지안녕 말걸지마~~!~!~!~!~!~!~!"
                }
                backgroundColor={"#F39889"}
                isMine={false}
              />
            </div>
          </div>
        </div>
        {/* <div className="m-16 absolute bottom-0 right-0">
          <BottomFixedBtn usage={"write"} />
        </div> */}
      </div>
    </>
  );
};

export default MainDetail;
