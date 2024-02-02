import ModalView from "../../molecules/modal/ModalView";
import { modalProps } from "@/types/Modal";
import React from "react";
import DefaultModal from "../../molecules/modal/ModalContent";

const Modal = ({ info, yesBtn, noBtn }: modalProps) => {
  return (
    <ModalView>
      <DefaultModal info={info} yesBtn={yesBtn} noBtn={noBtn} />
    </ModalView>
  );
};

export default Modal;
