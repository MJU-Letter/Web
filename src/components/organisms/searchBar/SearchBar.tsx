import Image from "next/image";
import React, { useState } from "react";
import arrowDown from "../../../../public/icons/arrowDown.png";
import SearchResult from "./SearchResult";

interface searchBarProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  selectedOption: string;
  setSelectedOption: (selectedOption: string) => void;
}

const SearchBar = ({
  searchValue,
  setSearchValue,
  selectedOption,
  setSelectedOption,
}: searchBarProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleArrowDownClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsMenuVisible(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      // 입력값의 길이가 10자를 초과하면
      alert("최대 10자까지만 입력 가능합니다."); // 경고창을 띄웁니다.
    } else {
      setSearchValue(e.target.value);
    }
  };
  return (
    <>
      <div className="relative w-206 h-38 bg-white rounded-8 flex items-center justify-start pl-12">
        <div className="medium-regular text-black">{selectedOption}</div>
        <Image
          onClick={handleArrowDownClick}
          className="w-24 h-24 mr-8 cursor-pointer"
          src={arrowDown}
          alt="arrowDown"
        />
        <input
          className="w-120 h-20 small-regular text-black placeholder:text-gray-medium-text-2 border-none border-0 focus:outline-none"
          placeholder="검색어를 입력하세요"
          onChange={handleInputChange}
          maxLength={10}
        />
      </div>
      {isMenuVisible && (
        <div className="top-[80px] rounded-8 py-8 absolute w-62 h-84 bg-white medium-regular text-black ">
          <div
            className="w-62 h-30 pl-12 mb-8 cursor-pointer"
            onClick={() => handleOptionClick("이름")}
          >
            이름
          </div>
          <div
            className="w-62 h-30 pl-12 mb-8 cursor-pointer"
            onClick={() => handleOptionClick("학과")}
          >
            학과
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
