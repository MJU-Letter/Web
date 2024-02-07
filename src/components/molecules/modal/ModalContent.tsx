import { modalProps } from "@/types/Modal";
import React from "react";

const ModalContent = ({ info, noBtn, yesBtn }: modalProps) => {
  return (
    <div className="medium-medium w-280 min-h-fit pt-60 pb-16 px-16 rounded-16 bg-white flex flex-col items-center justify-center box-border z-modal">
      <div className="text-gray-dark-text-1 text-center whitespace-pre-line mb-44 ">
        {info}
      </div>

      {noBtn && yesBtn && (
        <div className="flex items-center justify-between">
          <button
            className="mr-8 w-120 h-44 rounded-8 bg-gray-light flex items-center justify-center text-gray-medium-text-2"
            onClick={noBtn.handler}
          >
            {noBtn.info}
          </button>
          <button
            className="w-120 h-44 rounded-8 bg-main-point text-white flex items-center justify-center"
            onClick={yesBtn.handler}
          >
            {yesBtn.info}
          </button>
        </div>
      )}
      {!noBtn && yesBtn && (
        <div>
          <button
            className="mt-[-12px] w-248 h-44 rounded-8 bg-main-point text-white flex items-center justify-center"
            onClick={yesBtn.handler}
          >
            {yesBtn.info}
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
