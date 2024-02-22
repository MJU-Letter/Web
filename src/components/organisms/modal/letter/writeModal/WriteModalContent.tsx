import CheckBox from "@/components/atoms/button/letterWriting/CheckBox";
import ColorPick from "@/components/atoms/button/letterWriting/ColorPick";
import { COLORS } from "@/constants/letterColors";
import React from "react";

interface letterModalContentProps {
  selectedColor: keyof typeof COLORS;
  setSelectedColor: React.Dispatch<React.SetStateAction<keyof typeof COLORS>>;
  textAreaValue: string;
  setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
const LetterModalContent = ({
  selectedColor,
  setTextAreaValue,
  textAreaValue,
  setIsChecked,
  isChecked,
  setSelectedColor,
}: letterModalContentProps) => {
  return (
    <div className="mt-24 w-280 bg-white px-24 flex flex-col justify-center text-gray-dark-text-1 text-center whitespace-pre-line">
      <div className=" mb-20 text-gray-dark-text-1 medium-medium">
        롤링페이퍼로 마음을 전해보세요.
      </div>
      <div>
        <textarea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          className="mb-12 focus:border-0 focus:outline-none w-232 min-h-264 overflow-y-scroll p-12 gangwon-medium text-black flex-nowrap "
          style={{
            backgroundColor: COLORS[selectedColor],
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
          }}
        />
      </div>
      <div className="w-fit">
        <ColorPick
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div className="mt-34 ml-auto">
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
    </div>
  );
};

export default LetterModalContent;
