import React from "react";

interface noticeListProps {
  name: string | null;
  isChecked: boolean;
}

const NoticeList = ({ name, isChecked }: noticeListProps) => {
  return (
    <div
      className={`w-312 h-46 bg-white rounded-8 flex items-center pl-16 ${
        isChecked ? "opacity-40" : ""
      }`}
    >
      <div className="flex text-gray-dark-text-1 medium-regular whitespace-pre-wrap">
        {name ? (
          <>
            <h1 className="medium-bold">{name}</h1> 님이 나에게 롤링페이퍼를
            남겼어요.
          </>
        ) : (
          <>
            <h1 className="medium-bold">익명의 누군가</h1>가 나에게 롤링페이퍼를
            남겼어요.
          </>
        )}
      </div>
    </div>
  );
};

export default NoticeList;
