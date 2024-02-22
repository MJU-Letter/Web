import { modalProps } from "@/types/Modal";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import React, { HTMLAttributes } from "react";
import { createPortal } from "react-dom";

interface modalViewProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;

  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
  noBtn?: {
    info: string;
    handler?: () => void;
  };
  yesBtn?: {
    info: string;
    handler?: () => void;
  };
}

const ModalView = ({
  children,
  isOpen,
  onOpen,
  onOpenChange,
  noBtn,
  yesBtn,
  ...props
}: modalViewProps) => {
  return (
    <>
      <>
        <Modal
          classNames={{
            base: " pb-8 bg-red-50 rounded-16 w-fit min-h-fit overflow-x-hidden z-modal ",
          }}
          isDismissable={false}
          shouldBlockScroll={true}
          placement="center"
          isOpen={isOpen}
          hideCloseButton={true}
          portalContainer={document.querySelector("main") as HTMLDivElement}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                  {noBtn && yesBtn && (
                    <div className="flex items-center w-full justify-center">
                      <Button
                        className="mr-8 w-120 h-44 bg-gray-light flex items-center justify-center text-gray-medium-text-2"
                        onClick={() => {
                          noBtn.handler && noBtn.handler();
                          onClose();
                        }}
                      >
                        {noBtn.info}
                      </Button>
                      <Button
                        className="w-120 h-44  bg-main-point text-white flex items-center justify-center"
                        onClick={() => {
                          yesBtn.handler && yesBtn.handler();
                          onClose();
                        }}
                      >
                        {yesBtn.info}
                      </Button>
                    </div>
                  )}
                  {!noBtn && yesBtn && (
                    <div>
                      <Button
                        className="mt-[-12px] w-248 h-44 bg-main-point text-white flex items-center justify-center"
                        onClick={() => {
                          yesBtn.handler && yesBtn.handler();
                          onClose();
                        }}
                      >
                        {yesBtn.info}
                      </Button>
                    </div>
                  )}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      ,
    </>
  );
};

export default ModalView;
