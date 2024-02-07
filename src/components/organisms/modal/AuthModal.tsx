import ModalContent from "@/components/molecules/modal/ModalContent";
import ModalView from "@/components/molecules/modal/ModalView";
import { AuthModalProps } from "@/types/Modal";
import React from "react";
import AuthCheckingModalContent from "./AuthCheckingModalContent";

const AuthModal = ({ authStatus }: AuthModalProps) => {
  const handleYesClick = () => {
    console.log("Yes button clicked!");
  };
  const handleNoClick = () => {
    console.log("No button clicked!");
  };

  return (
    <>
      {authStatus === "proceeding" && (
        <ModalView>
          <ModalContent info={`학생카드 인증 중 \n 조금만 기다려 주세요.`} />
        </ModalView>
      )}
      {authStatus === "checking" && (
        <ModalView>
          <ModalContent
            info={
              <AuthCheckingModalContent name={""} major={""} studentId={""} />
            }
            yesBtn={{ info: "확인", handler: handleYesClick }}
            noBtn={{ info: "취소", handler: handleNoClick }}
          />
        </ModalView>
      )}
      {authStatus === "failed" && (
        <ModalView>
          <ModalContent
            info={`학생카드 인증에 실패했어요.\n 다시 시도해 주세요.`}
            yesBtn={{ info: "확인", handler: handleYesClick }}
          />
        </ModalView>
      )}
    </>
  );
};

export default AuthModal;
