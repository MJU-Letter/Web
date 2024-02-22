import React from "react";

import test from "@public/icons/testProfile.png";
import SearchProfile from "@/components/atoms/profile/searchProfile/SearchProfile";

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
