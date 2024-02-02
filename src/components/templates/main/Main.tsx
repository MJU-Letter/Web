"use client";
import MainProfile from "../../atoms/profile/mainProfile/MainProfile";
import SearchBar from "../../organisms/searchBar/SearchBar";
import React, { useState } from "react";
import test from "../../../../public/icons/testProfile.png";
import SearchResult from "../../organisms/searchBar/SearchResult";
import Search from "../search/Search";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("이름");

  return (
    <div className="mt-16 w-360  flex flex-col items-center">
      <div className="ml-auto">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className=" mb-20">
        {searchValue && (
          <SearchResult
            selectedOption={selectedOption}
            inputValue={searchValue}
          />
        )}
      </div>
      {searchValue ? (
        // To Do: search props
        <Search />
      ) : (
        <div className="grid grid-cols-2 gap-16">
          <MainProfile
            profileImg={test}
            name={"이보현"}
            major={"경영학과"}
            studentId={"21"}
          />
          <MainProfile
            profileImg={test}
            name={"이보현"}
            major={"경영학과"}
            studentId={"21"}
          />
          <MainProfile
            profileImg={test}
            name={"이보현"}
            major={"경영학과"}
            studentId={"21"}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
