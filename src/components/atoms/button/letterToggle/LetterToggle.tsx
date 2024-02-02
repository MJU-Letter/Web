import React from "react";

interface letterToggleProps {
  selectedOption: "received" | "sent";
  setSelectedOption: (selectedOption: "received" | "sent") => void;
}

const LetterToggle = ({
  selectedOption,
  setSelectedOption,
  ...props
}: letterToggleProps) => {
  return (
    <div {...props} className="relative flex items-center">
      <button
        onClick={() => setSelectedOption("received")}
        className="transition-all w-180 h-54 flex items-center justify-center medium-regular text-point"
      >
        내가 받은 롤링페이퍼
      </button>
      <button
        onClick={() => setSelectedOption("sent")}
        className="transition-all w-180 h-54 flex items-center justify-center medium-regular text-point"
      >
        내가 쓴 롤링페이퍼
      </button>
      <div
        className=" absolute bottom-0 transition-all ease-in-out duration-300 border-b-2 border-main-point"
        style={{
          width: "180px",
          transform: `translateX(${
            selectedOption === "received" ? 0 : "180px"
          })`,
        }}
      />
    </div>
  );
};

export default LetterToggle;
