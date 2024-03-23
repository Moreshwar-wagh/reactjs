import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="position-relative w-50">
        <BsSearch
          className="position-absolute top-50 translate-middle-y"
          style={{ right: "40px" }}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search User Name Here"
          className="m-4 border rounded p-2 text-muted"
          style={{ outline: "none", width: "96%" }}
        />
      </div>
    </div>
  );
};
