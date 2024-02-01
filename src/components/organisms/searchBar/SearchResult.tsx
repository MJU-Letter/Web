import React from "react";

interface searchResultProps {
  selectedOption: string;
  inputValue: string;
}

const SearchResult = ({ selectedOption, inputValue }: searchResultProps) => {
  return (
    <div className=" mt-36 flex text-point medium-regular whitespace-pre-wrap">
      {selectedOption} <div className="medium-bold">'{inputValue}'</div> 검색
      결과
    </div>
  );
};

export default SearchResult;
