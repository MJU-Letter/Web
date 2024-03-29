import NoticeList from "@/components/atoms/notice/noticeList/NoticeList";
import React from "react";

const Notice = () => {
  return (
    <div className=" w-360 flex flex-col items-center justify-start">
      <div className="text-point large-bold mb-32">알림</div>
      <div className="grid grid-flow-row gap-12 ">
        <NoticeList name={"김뎁스"} isChecked={false} />
        <NoticeList name={"김뎁스"} isChecked={false} />
        <NoticeList name={"김뎁스"} isChecked={true} />
        <NoticeList name={"김뎁스"} isChecked={true} />
        <NoticeList name={"뿡빵뽕"} isChecked={true} />
      </div>
    </div>
  );
};

export default Notice;
