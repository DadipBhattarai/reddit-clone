import { Clear, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";

const Search = () => {
  const [searches, setSearches] = useState("");

  const handleSearch = (e) => {
    setSearches(e.target.value);
  };

  const handleClear = () => {
    setSearches("");
  };

  return (
    <div className="search">
      <div className="searchIcon">
        <SearchOutlined />
        <input
          type="text"
          placeholder="Search Reddit"
          onChange={handleSearch}
          value={searches}
        />
      </div>
      {searches && (
        <div onClick={handleClear}>
          <Clear fontSize="small" />
        </div>
      )}
    </div>
  );
};

export default Search;
