import React from "react";
import emptyBox from "../../../../../public/icons/emptyBox.png";
import checkBox from "../../../../../public/icons/checkBox.png";
import Image from "next/image";

interface checkBoxProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

const CheckBox = ({ isChecked, setIsChecked }: checkBoxProps) => {
  return (
    <div className="flex items-center">
      {isChecked ? (
        <Image
          onClick={() => setIsChecked(!isChecked)}
          className="w-24 h-24 cursor-pointer"
          src={checkBox}
          alt="checkBox"
        />
      ) : (
        <Image
          onClick={() => setIsChecked(!isChecked)}
          className="w-24 h-24 cursor-pointer"
          src={emptyBox}
          alt="emptyBox"
        />
      )}
      <div className="ml-4 flex mb-1 small-medium text-gray-dark-text-1">
        익명
      </div>
    </div>
  );
};

export default CheckBox;
