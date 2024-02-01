import React from "react";

interface toggleProps {
  isOn: boolean;
  toggleFn: (isOn: boolean) => void;
}

const Toggle = ({ isOn, toggleFn }: toggleProps) => {
  const togglePosition = isOn ? "translate-x-20" : "translate-x-0";
  return (
    <div
      className={`w-45 h-24 rounded-15 flex items-center transition-colors px-5 ${
        isOn ? "bg-main-point" : "bg-gray-medium-text-2"
      }  `}
      onClick={() => toggleFn(isOn)}
    >
      <div className={`w-full`}>
        <div
          className={`w-16 h-16 rounded-[50%] transition-all bg-white ${togglePosition}`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
