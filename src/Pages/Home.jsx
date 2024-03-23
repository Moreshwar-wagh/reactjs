import React, { useCallback, useContext, useEffect, useState } from "react";
import { Accordian } from "../components/Accordian";
import { CelebritiesContext } from "../context/CelebrityContext";
import { SearchBox } from "../components/SearchBox";

export const Home = () => {
  const [openAccordianID, setOpenAccordionId] = useState(null);
  const { jsonData } = useContext(CelebritiesContext);
  const [filteredData, setFilteredData] = useState(jsonData);
  const [editAccordianDataID, setEditAccordianDataID] = useState(null);

  const handleAccordianClick = (id) => {
    if (editAccordianDataID === null) {
      setOpenAccordionId((prevId) => (prevId === id ? null : id));
    }
  };

  const handleSearch = useCallback(
    (searchTerm) => {
      const filterResult = jsonData.filter((celebrity) => {
        const fullName = celebrity.first + " " + celebrity.last;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredData(filterResult);
    },
    [jsonData],
  );

  useEffect(() => {
    handleSearch("");
  }, [handleSearch]);

  return (
    <div className="container">
      <SearchBox onSearch={handleSearch} />
      {filteredData.map((celebrity, index) => {
        return (
          <div className="rounded border border-2 mx-auto d-flex my-2" style={{
            maxWidth: "60%",
          }} key={index}>
            <Accordian
              id={celebrity.id}
              isOpen={celebrity.id === openAccordianID}
              first={celebrity.first}
              last={celebrity.last}
              dob={celebrity.dob}
              gender={celebrity.gender}
              country={celebrity.country}
              description={celebrity.description}
              picture={celebrity.picture}
              onClick={() => handleAccordianClick(celebrity.id)}
              setEditAccordianDataID={setEditAccordianDataID}
            />
          </div>
        );
      })}
    </div>
  );
};
