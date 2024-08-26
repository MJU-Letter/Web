'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@public/icons/logo.png';
import check from '@public/icons/check.png';

import AuthModal from '@/components/organisms/modal/auth/AuthModal';

const Auth = () => {
  // const [authStatus, setAuthStatus] =
  //   useState<AuthModalProps["authStatus"]>(undefined);
  // const [studentInfo, setStudentInfo] = useState<AuthModalProps["studentInfo"]>(
  //   {
  //     name: "테스트학생",
  //     major: "테스트전공",
  //     studentId: "테스트학번",
  //   }
  // );
  // const handleFileUpload = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   setAuthStatus("proceeding");

  //   // 파일을 서버에 전송하고 인증을 진행하는 코드를 작성
  //   // 서버에서 응답을 받아서 그에 따라 authStatus를 업데이트

  //   // const response = await sendFileToServer(file);
  //   // if (response.success) {
  //   //   setAuthStatus("successed");
  //   // } else {
  //   //   setAuthStatus("failed");
  //   // }
  // };
  return (
    <>
      {/* {authStatus && authStatus !== "successed" && (
        <AuthModal authStatus={authStatus} studentInfo={studentInfo} />
      )} */}
    </>
  );
};

export default Auth;
