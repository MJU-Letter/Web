import ModalView from "@/components/organisms/modal/ModalView";
import { COLORS } from "@/constants/letterColors";
import React, { useState } from "react";
import LetterModalContent from "./WriteModalContent";

const WriteModal = () => {
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof COLORS>("red");
  const [isChecked, setIsChecked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <LetterModalContent
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      textAreaValue={textAreaValue}
      setTextAreaValue={setTextAreaValue}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    />
  );
};

export default WriteModal;
