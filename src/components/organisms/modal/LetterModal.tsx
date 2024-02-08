import CheckBox from "@/components/atoms/button/letterWriting/CheckBox";
import ColorPick from "@/components/atoms/button/letterWriting/ColorPick";
import ModalContent from "@/components/molecules/modal/ModalContent";
import ModalView from "@/components/molecules/modal/ModalView";
import { COLORS } from "@/constants/letterColors";
import React, { useState } from "react";
import LetterModalContent from "./LetterModalContent";

interface letterModalProps {
  isLetterModalOpened: boolean;
  setIsLetterModalOpened: (isLetterModalOpened: boolean) => void;
}

const LetterModal = ({
  isLetterModalOpened,
  setIsLetterModalOpened,
}: letterModalProps) => {
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof COLORS>("red");
  const [isChecked, setIsChecked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleYesClick = () => {
    console.log("Yes button clicked!");
    setIsLetterModalOpened(!isLetterModalOpened);
  };
  const handleNoClick = () => {
    console.log("No button clicked!");
    setIsLetterModalOpened(!isLetterModalOpened);
  };

  return (
    <ModalView>
      <ModalContent
        info={
          <LetterModalContent
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            textAreaValue={textAreaValue}
            setTextAreaValue={setTextAreaValue}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        }
        yesBtn={{ info: "확인", handler: handleYesClick }}
        noBtn={{ info: "취소", handler: handleNoClick }}
      />
    </ModalView>
  );
};

export default LetterModal;
