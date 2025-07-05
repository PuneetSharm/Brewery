import React, { useState } from "react";
import { DropdownIconDown, DropdownIconUp, TickMarkIcon } from "./IconsSVG";

const DropDown = ({ options, handleSelectedOption, selectedCityName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedName = options?.find(
    (option) => option.actualValue === selectedCityName
  );

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropDownAfterSelectedName = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full cursor-pointer text-[#2D2D2D] font-medium">
      <div
        className="border-2 border-[#DADADA] px-4 py-4 w-full rounded-md"
        onClick={handleDropDown}
      >
        <span className="flex items-center justify-between">
          {selectedName?.labelValue}{" "}
          <span> {isOpen ? <DropdownIconUp /> : <DropdownIconDown />}</span>
        </span>
      </div>
      {isOpen && (
        <div
          className="absolute bg-white px-4 py-2 w-full left-0 top-full rounded"
          onClick={handleDropDownAfterSelectedName}
        >
          <div className="relative">
            {options?.map((option) => {
              return (
                <div
                  key={option?.actualValue}
                  onClick={() => handleSelectedOption(option?.actualValue)}
                  className={`flex items-center justify-between py-3 px-2 hover:bg-gray-100 ${
                    selectedName?.labelValue === option?.labelValue
                      ? "bg-blue-300"
                      : "bg-white"
                  }`}
                >
                  {option?.labelValue}{" "}
                  {selectedName?.labelValue === option?.labelValue ? (
                    <span>
                      <TickMarkIcon />
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
