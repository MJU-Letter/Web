"use client";
import ProfileSetting from "@/components/organisms/profileSetting/ProfileSetting";
import React from "react";
import testProfile '../../../'

const page = () => {
  const test = () => {
    console.log("hi");
  };
  return (
    <div>
      <ProfileSetting
        name={"이보현"}
        major={"응용소프트웨어전공"}
        studentId={"19"}
        profileImg={testProfile}
        setInstagramId={test}
      />
    </div>
  );
};

export default page;
