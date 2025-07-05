import { useState } from "react";
import { SearchIcon } from "./IconsSVG";

const SearchBox = ({ handleInputSearch, searchInputValue}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={searchInputValue}
        placeholder="Search here..."
        className="px-4 py-1.5 placeholder:text-[#A39B91] rounded-md border-2 border-[#DADADA]"
        onChange={handleInputSearch}
      />
      <button className="px-10 py-2 bg-[#D2691E] rounded-md hover:bg-[#B05A16]">
        <SearchIcon />
      </button>
    </div>
  );
};
export default SearchBox;
