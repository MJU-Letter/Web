import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ModalView = ({ children, ...props }: Props) => {
  // 모달 클릭 시 백드롭에도 터치 이벤트가 전파되는 것을 막기 위함
  const handleClickModalView = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed bg-[#00000030] top-0 left-0 w-full h-full flex justify-center items-center z-modal">
      <div onClick={handleClickModalView} {...props}>
        {children}
      </div>
    </div>
  );
};

export default ModalView;
