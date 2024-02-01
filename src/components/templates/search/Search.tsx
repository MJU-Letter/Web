import SearchBar from "../../organisms/searchBar/SearchBar";
import React from "react";
import SearchProfile from "../../atoms/profile/searchProfile/SearchProfile";
import test from "../../../../public/icons/testProfile.png";

interface searchProps {
  major: string;
  name: string;
  selectedOption: string;
}

const Search = () => {
  return (
    <div>
      <div>
        <SearchProfile
          profileImg={test}
          name={"김명지"}
          major={"경영학과"}
          studentId={"21"}
        />
      </div>
    </div>
  );
};

export default Search;
