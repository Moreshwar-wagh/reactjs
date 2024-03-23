import React, { useContext, useState } from "react";
import { CelebritiesContext } from "../context/CelebrityContext";
import { DialogBox } from "../components/DialogBox";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export const Accordian = ({
  id,
  isOpen,
  first,
  last,
  dob,
  gender,
  country,
  description,
  picture,
  onClick,
  setEditAccordianDataID,
}) => {
  const accordianID = `accordion ${first}`;
  const { jsonData } = useContext(CelebritiesContext);
  const [updateJSONData, setUpdateJSONData] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedFirst, setEditedFirst] = useState(first);
  const [editedLast, setEditedLast] = useState(last);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedGender, setEditedGender] = useState(gender);
  const [editedCountry, setEditedCountry] = useState(country);
  const [editedAge, setEditedAge] = useState(dob);

  const handleDelete = () => {
    const newData = jsonData.filter((celebrity) => {
      return celebrity.id !== id;
    });
    updateJSONData(newData);
  };

  const CalculateAge = (dob) => {
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthGap = today.getMonth() - birthDate.getMonth();
    if (
      monthGap < 0 ||
      (monthGap === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const isValidName = (first, last) => {
    const regx = /\d/;
    const hasNumberfirst = regx.test(first);
    const hasNumberlast = regx.test(last);
    return first.trim() !== "" && !hasNumberfirst && !hasNumberlast;
  };

  const isValidAge = (age) => {
    const parsedAge = parseInt(age, 10);
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return Number.isInteger(parsedAge) && dateRegex.test(age);
  };

  const isValidGender = (gender) => {
    const allowedGenders = [
      "male",
      "female",
      "TransGender",
      "Rather not say",
      "other",
    ];
    return allowedGenders.includes(gender);
  };

  const isValidCountry = (country) => {
    if (country.length < 4) {
      return false;
    }
    return country.trim() !== "";
  };

  const isValidDiscription = (desc) => {
    if (desc.length < 150) {
      return false;
    }
    return desc.trim() !== "";
  };

  const isValidForm = () => {
    if (!isValidName(editedFirst, editedLast)) {
      window.alert("Please Enter Valid Name.");
      return false;
    }
    if (!isValidAge(editedAge)) {
      window.alert("Please enter a valid age in YYYY-MM-DD Format.");
      return false;
    }

    if (!isValidGender(editedGender)) {
      window.alert("Please select a valid gender.");
      return false;
    }
    if (!isValidCountry(editedCountry)) {
      window.alert(
        "Invalid Country, Length should be >= 4 and does not contain numeric value.",
      );
      return false;
    }
    if (!isValidDiscription(editedDescription)) {
      window.alert("Invalid Description, Length should be >= 150 words.");
      return false;
    }
    return true;
  };

  const handleEdit = () => {
    if (isNaN(CalculateAge(editedAge)) || CalculateAge(editedAge) < 1) {
      alert("Please enter a valid date of birth");
      return;
    }
    if (!isValidForm()) {
      return;
    }
    if (editMode) {
      const updateData = jsonData.map((celebrity) => {
        if (celebrity.id === id) {
          return {
            ...celebrity,
            first: editedFirst,
            last: editedLast,
            description: editedDescription,
            dob: editedAge,
            country: editedCountry,
            gender: editedGender,
          };
        }
        return celebrity;
      });
      updateJSONData(updateData);
      setEditAccordianDataID(null);
      setEditMode(false);
    } else {
      if (CalculateAge(editedAge) < 18) {
        return;
      }
      setEditMode(true);
      setEditAccordianDataID(id);
    }
  };

  return (
    <div className="container" style={{ width: "700px" }}>
      <div className="accordion accordion-flush" id={accordianID}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`d-flex justify-content-between align-items-center w-100 `}
              type="button"
              onClick={onClick}
              style={{
                boxShadow: "none",
                outline: "none",
                background: "white",
                border: "none",
              }}
              disabled={setEditAccordianDataID === id}
            >
              <div className="d-flex justify-content-start align-items-center w-100 p-1">
                <img
                  src={picture}
                  alt="profilepic"
                  className="rounded-circle mx-2"
                  height={50}
                />
                <p className="d-flex mb-3 gap-1">
                  <input
                    type="text"
                    value={editMode ? editedFirst : first}
                    onChange={(e) => setEditedFirst(e.target.value)}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2 mx-1" : ""
                    } mt-1 bg-white`}
                    style={{
                      border: "none",
                      outline: "none",
                      color: "black",
                      width: "5rem",
                      fontSize: "20px",
                    }}
                  />

                  <input
                    type="text"
                    value={editMode ? editedLast : last}
                    onChange={(e) => setEditedLast(e.target.value)}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2" : ""
                    } mt-1 bg-white`}
                    style={{
                      border: "none",
                      outline: "none",
                      color: "black",
                      width: "8rem",
                      fontSize: "20px",
                      // marginLeft: `${!editMode ? "" : ""}`,
                    }}
                  />
                </p>
              </div>
              {isOpen ? (
                <AiOutlineMinus className="accordion-icon" />
              ) : (
                <AiOutlinePlus className="accordion-icon" />
              )}
            </button>
          </h2>
          <div
            id={`${accordianID}-collapse`}
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          >
            <div className="accordion-body ">
              <form className="d-flex justify-content-evenly flex-wrap ">
                <div className="d-flex flex-column mb-3 ">
                  {/* Age Input */}
                  <label htmlFor="Age" className="text-muted fw-medium">
                    Age
                  </label>
                  <input
                    type="text"
                    value={editMode ? editedAge : CalculateAge(dob) + " years"}
                    onChange={(e) => {
                      let value = e.target.value;
                      // Adding dashes after every 4 characters (year)
                      if (value.length === 4 && !value.includes("-")) {
                        value += "-";
                      }
                      // Adding dashes after every 7 characters (year and month)
                      if (value.length === 7 && !value.includes("-", 5)) {
                        value += "-";
                      }
                      setEditedAge(value);
                    }}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2" : ""
                    } mt-1 bg-white `}
                    style={{ border: "none", outline: "none", color: "black" }}
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div
                  className={`d-flex flex-column mb-3 ${
                    editMode ? "mx-1" : "mx-4"
                  }`}
                >
                  {/* gender Selection */}
                  <label htmlFor="gender" className="text-muted fw-medium">
                    Gender
                  </label>
                  <select
                    value={editMode ? editedGender : gender}
                    onChange={(e) => setEditedGender(e.target.value)}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2" : ""
                    } mt-1 bg-white`}
                    style={{
                      border: "none",
                      outline: "none",
                      color: "black",
                      width: "12rem",
                      padding: "5px 10px",
                      appearance: `${editMode ? "" : "none"}`,
                    }}
                  >
                    <option value={gender}>{gender}</option>
                    <option value="female">
                      {gender === "male" ? "female" : "male"}
                    </option>
                    <option value="TransGender">TransGender</option>
                    <option value="Rather not say">Rather not say</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="d-flex flex-column mb-3">
                  {/* Country */}
                  <label htmlFor="Country" className="text-muted fw-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    value={editMode ? editedCountry : country}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const alphabeticValue = inputValue.replace(/[0-9]/g, "");
                      setEditedCountry(alphabeticValue);
                    }}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2" : ""
                    } mt-1 bg-white `}
                    style={{ border: "none", outline: "none", color: "black" }}
                  />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  {/* Description TextArea */}
                  <label htmlFor="Country" className="text-muted fw-medium">
                    Description
                  </label>
                  <textarea
                    value={editMode ? editedDescription : description}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    disabled={!editMode}
                    className={`${
                      editMode ? "border rounded p-2" : ""
                    } mt-1 bg-white w-100`}
                    style={{
                      resize: "none",
                      height: "7rem",
                      border: "none",
                      outline: "none",
                      color: "black",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </form>

              <div className="d-flex justify-content-end mt-3 gap-1">
                <button
                  className="bg-white"
                  style={{ border: "none" }}
                  type="button"
                >
                  {editMode ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setEditMode(false);
                        setEditAccordianDataID(null);
                      }}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={handleOpenDialog}
                    >
                      Delete
                    </button>
                  )}
                </button>
                <DialogBox
                  isOpen={isDialogOpen}
                  onClose={handleCloseDialog}
                  onDelete={handleDelete}
                >
                  <p className="fw-medium mb-4">
                    Are you sure you want to delete?
                  </p>
                </DialogBox>
                <button
                  className="bg-white"
                  style={{
                    border: "none",
                  }}
                  // disabled={
                  //   !editMode ||
                  //   (editedFirst === first &&
                  //     editedLast === last &&
                  //     editedDescription === description &&
                  //     editedAge === dob &&
                  //     editedCountry === country &&
                  //     editedGender === gender) ||
                  //   CalculateAge(dob) < 18
                  // }
                  onClick={(e) => handleEdit(e)}
                >
                  {editMode ? (
                    <button
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={(e) => handleEdit(e)}
                      disabled={
                        CalculateAge(editedAge) < 18 ? "gray" : "skyblue"
                      }
                    >
                      Edit
                    </button>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
