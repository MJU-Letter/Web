import ModalView from "@/components/molecules/modal/ModalView";
import { AuthModalProps } from "@/types/Modal";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import AuthCheckingModalContent from "./AuthCheckingModalContent";

const AuthModal = ({ authStatus }: AuthModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleYesClick = () => {
    console.log("Yes button clicked!");
  };
  const handleNoClick = () => {
    console.log("No button clicked!");
  };

  return (
    <>
      {authStatus === "proceeding" && (
        <ModalView
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          children={`학생카드 인증 중 \n 조금만 기다려 주세요.`}
        />
        // <ModalView>
        //   <ModalContent info={`학생카드 인증 중 \n 조금만 기다려 주세요.`} />
        // </ModalView>
      )}
      {authStatus === "checking" && (
        <ModalView
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          children={
            <AuthCheckingModalContent name={""} major={""} studentId={""} />
          }
          yesBtn={{ info: "확인", handler: handleYesClick }}
          noBtn={{ info: "취소", handler: handleNoClick }}
        />
        // <ModalView>
        //   <ModalContent
        //     info={
        //       <AuthCheckingModalContent name={""} major={""} studentId={""} />
        //     }
        //     yesBtn={{ info: "확인", handler: handleYesClick }}
        //     noBtn={{ info: "취소", handler: handleNoClick }}
        //   />
        // </ModalView>
      )}
      {authStatus === "failed" && (
        <ModalView
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          children={`학생카드 인증에 실패했어요.\n 다시 시도해 주세요.`}
          yesBtn={{ info: "확인", handler: handleYesClick }}
        />
        // <ModalView>
        //   <ModalContent
        //     info={`학생카드 인증에 실패했어요.\n 다시 시도해 주세요.`}
        //     yesBtn={{ info: "확인", handler: handleYesClick }}
        //   />
        // </ModalView>
      )}
    </>
  );
};

export default AuthModal;
