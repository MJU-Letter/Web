"use client";
import Auth from "@/components/templates/login/auth/Auth";
import React from "react";

const page = () => {
  const test = () => {
    console.log("hi");
  };
  return (
    <div>
      <Auth isUploaded={true} handleUpload={test} />
    </div>
  );
};

export default page;
