import DetailProfile from "@/components/atoms/profile/detailProfile/DetailProfile";
import test from "../../../../public/icons/testProfile.png";
import React, { useState } from "react";
import LetterToggle from "@/components/atoms/button/letterToggle/LetterToggle";
import Letter from "@/components/atoms/letter/Letter";
import BottomFixedBtn from "@/components/atoms/button/bottomFixed/BottomFixed";

const MyPage = () => {
  const [selectedOption, setSelectedOption] = useState<"received" | "sent">(
    "received"
  );
  return (
    <div className="relative  w-360 flex flex-col items-center justify-start mt-20">
      <div className="mb-12">
        <DetailProfile
          profileImg={test}
          name={"이보현"}
          major={"응용소프트웨어전공"}
          studentId={"19"}
          instagramId={"keepkeepkeepkeepbegging"}
        />
      </div>
      <div className="mb-24">
        <LetterToggle
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      {selectedOption === "received" ? (
        <div className="grid grid-cols-2 gap-16">
          <Letter
            letterText={"안녕"}
            backgroundColor={"#F39889"}
            isMine={true}
          />
          <Letter
            letterText={"안녕"}
            backgroundColor={"#F39889"}
            isMine={true}
          />
        </div>
      ) : (
        <div></div>
      )}
      {/* <div className="m-16 fixed bottom-0 right-0">
        <BottomFixedBtn usage={"write"} />
      </div> */}
    </div>
  );
};

export default MyPage;
