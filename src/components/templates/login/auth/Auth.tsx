"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@public/icons/logo.png";
import check from "@public/icons/check.png";
import { AuthModalProps } from "@/types/Modal";
import AuthModal from "@/components/organisms/modal/auth/AuthModal";

interface AuthTemplateProps {
  isUploaded: boolean;
  handleUpload: () => void;
}

const Auth = ({ isUploaded, handleUpload }: AuthTemplateProps) => {
  const [authStatus, setAuthStatus] =
    useState<AuthModalProps["authStatus"]>(undefined);
  const [studentInfo, setStudentInfo] = useState<AuthModalProps["studentInfo"]>(
    {
      name: "테스트학생",
      major: "테스트전공",
      studentId: "테스트학번",
    }
  );
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAuthStatus("proceeding");

    // 파일을 서버에 전송하고 인증을 진행하는 코드를 작성
    // 서버에서 응답을 받아서 그에 따라 authStatus를 업데이트

    // const response = await sendFileToServer(file);
    // if (response.success) {
    //   setAuthStatus("successed");
    // } else {
    //   setAuthStatus("failed");
    // }
  };
  return (
    <>
      {authStatus && authStatus !== "successed" && (
        <AuthModal authStatus={authStatus} studentInfo={studentInfo} />
      )}

      <div className="w-360 min-h-640 flex flex-col items-center justify-center text-center text-main-point">
        <Image
          className="w-204 h-96 object-contain mb-32"
          src={logo}
          alt="logoImg"
        />

        <h1 className="large-bold mb-20">
          '명지편지'는 명지대학교 학생들을 위한 <br /> 롤링페이퍼 서비스예요.
        </h1>
        <h2 className="medium-regular pb-47 border-b-1 border-gray-dark-text-1 w-264 mb-47">
          서비스 이용을 위해서는 <br />
          학생카드 인증이 필요해요.
        </h2>
        <h2 className="medium-regular mb-32">
          1. MSI 학생정보시스템 접속 <br />
          2. 학적/장학 → 학생카드 <br />
          3. 학생카드 캡처 후 업로드 <br />
        </h2>
        <div className="flex items-center  mb-32 ">
          <h3 className=" gangwon-xl-under border-b-1 border-gray-medium-text-2">
            파일 불러오기{" "}
            {/* <input
              type="file"
              onChange={handleFileUpload}
              style={{ display: "none" }}
              id="upload-button"
            /> */}
          </h3>
          {isUploaded && (
            <Image className="ml-4 w-18 h-18" src={check} alt="check" />
          )}
        </div>
        <button className="w-125 h-48 rounded-28 bg-white flex items-center justify-center medium-bold">
          업로드
        </button>
      </div>
    </>
  );
};

export default Auth;
