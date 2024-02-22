import React from "react";

const YesButton = ({
  info,
  handler,
  isOne,
}: {
  info: string;
  handler: () => void;
  isOne: boolean;
}) => {
  return (
    <button
      className={`transition-opacity duration-500 ease-in-out hover:opacity-50 rounded-8 ${
        isOne ? "w-280" : "w-120"
      } h-44 bg-main-point text-white flex items-center justify-center`}
      onClick={() => {
        handler();
      }}
    >
      {info}
    </button>
  );
};

export default YesButton;
