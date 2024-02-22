import React from "react";

const NoButton = ({ info, handler }: { info: string; handler: () => void }) => {
  return (
    <button
      className="transition-opacity duration-500 ease-in-out hover:opacity-50 rounded-8 mr-8 w-120 h-44 bg-gray-light flex items-center justify-center text-gray-medium-text-2"
      onClick={() => {
        handler();
      }}
    >
      {info}
    </button>
  );
};

export default NoButton;
