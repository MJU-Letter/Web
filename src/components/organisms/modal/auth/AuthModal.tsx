'use client';
import ModalView from '@/components/organisms/modal/ModalView';
import useModal from '@/hooks/useModal';
import ModalPortal from '@/utils/ModalPortal';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ProceedingContent from './ProceedingContent';
import CheckingContent from './CheckingContent';
import FailedContent from './FailedContent';
import { authImgUploadType, authImgUploadState } from '@/recoil/auth';

const AuthModal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [recoilAuthStatus, setRecoilAuthStatus] = useRecoilState<authImgUploadType>(authImgUploadState);
  const handleYesClick = () => {
    console.log('Yes button clicked!');
  };
  const handleNoClick = () => {
    console.log('No button clicked!');
  };

  useEffect(() => {
    openModal();
  }, [recoilAuthStatus]);

  return (
    <>
      <AnimatePresence>
        <ModalPortal>
          {isOpen && recoilAuthStatus.status === 'proceeding' && (
            <ModalView isOpen={isOpen} children={<ProceedingContent />} />
          )}
          {isOpen && recoilAuthStatus.status === 'checking' && (
            <ModalView
              isOpen={isOpen}
              children={<CheckingContent name={'이보현'} major={'경영'} studentId={'21'} />}
              yesBtn={{ info: '확인', handler: handleYesClick }}
              noBtn={{ info: '취소', handler: handleNoClick }}
            />
          )}
          {isOpen && recoilAuthStatus.status === 'failed' && (
            <ModalView
              isOpen={isOpen}
              children={<FailedContent />}
              yesBtn={{ info: '확인', handler: handleYesClick }}
            />
          )}
        </ModalPortal>
      </AnimatePresence>

      {/* {isOpen && authStatus === "proceeding" && (
        <ModalView
          isOpen={isOpen}
          children={`학생카드 인증 중 \n 조금만 기다려 주세요.`}
        />
        // <ModalView>
        //   <ModalContent info={`학생카드 인증 중 \n 조금만 기다려 주세요.`} />
        // </ModalView>
      )}
      {isOpen && authStatus === "checking" && (
        <ModalView
          isOpen={isOpen}
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
      {isOpen && authStatus === "failed" && (
        <ModalView
          isOpen={isOpen}
          children={`학생카드 인증에 실패했어요.\n 다시 시도해 주세요.`}
          yesBtn={{ info: "확인", handler: handleYesClick }}
        />
        // <ModalView>
        //   <ModalContent
        //     info={`학생카드 인증에 실패했어요.\n 다시 시도해 주세요.`}
        //     yesBtn={{ info: "확인", handler: handleYesClick }}
        //   />
        // </ModalView>
      )} */}
    </>
  );
};

export default AuthModal;
