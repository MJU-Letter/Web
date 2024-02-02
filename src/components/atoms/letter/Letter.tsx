import Image, { StaticImageData } from "next/image";
import React from "react";
import trash from "../../../../public/icons/trash.png";

interface LetterProps {
  letterText: string;
  user?: { name: string; profileImg: StaticImageData | string };
  backgroundColor: string;
  isMine: boolean;
}

const Letter = ({ letterText, user, backgroundColor, isMine }: LetterProps) => {
  const trimmedText =
    letterText.length > 140
      ? `${letterText.slice(0, 140)}... 더보기`
      : letterText;
  return (
    <div
      className={`w-148 pt-8 pb-12 px-12 gangwon-medium`}
      style={{
        backgroundColor: `${backgroundColor}`,
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className={`w-124 min-h-40 max-h-200 flex-nowrap`}>
        {trimmedText}
      </div>
      <div className="flex mt-16">
        <h1 className="mr-8">From.</h1>
        {user ? (
          <>
            <Image
              className="w-16 h-16 rounded-[50%] object-contain mr-4"
              src={user.profileImg}
              alt="letter profile Img"
            />
            <h1>{user.name}</h1>
          </>
        ) : (
          <h1>익명</h1>
        )}
        {isMine && (
          <Image
            className="w-18 h-18 ml-auto cursor-pointer"
            src={trash}
            alt="trash"
          />
        )}
      </div>
    </div>
  );
};

export default Letter;
