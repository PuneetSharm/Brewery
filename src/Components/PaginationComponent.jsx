import React, { useEffect, useState } from "react";
import { getMetaData } from "../Services/axiosService";

const PaginationComponent = ({
  selectedPage,
  perPage,
  handlePage,
  totalCount,
  //handleNextClick,
  //handlePrevClick,
}) => {
  //   const [totalPages, setTotalPages] = useState([]);
  //   const [showNumberArray, setShowNumberArray] = useState([]);

  const [dispayPaginationValue, setDispayPaginationValue] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(totalCount / perPage)
  );

  const lastPage = 10;

  //selectedPage , totalCout

  useEffect(() => {
    if (totalCount != 0) {
      //const numberOfPages = Math.ceil(totalCount / perPage);

      let startPage = selectedPage;

      let emptyArray = [];

      for (let i = startPage; i <= lastPage; i++) {
        emptyArray.push(i);
      }
      setDispayPaginationValue(emptyArray);

      //   const numberArray = Array.from(
      //     { length: numberOfPages },
      //     (_, index) => index + 1
      //   );
      //   const slicedNumbers = numberArray.slice(0, 5);
      //   setShowNumberArray(slicedNumbers);
      //   setTotalPages(numberArray);
    }
  }, [totalCount]);

  const handleNextClick = () => {
    console.log("coming here");
    if (selectedPage != numberOfPages) {
      handlePage(selectedPage + 1);
    }

    if (selectedPage + 1 <= numberOfPages) {
      // selectedPage ko set karna padega
      // array update karni padegi
      // check if selectedPage === array ka last element hai kya
      if (
        selectedPage === dispayPaginationValue[dispayPaginationValue.length - 1]
      ) {
        let emptyArray = [];
        for (let i = selectedPage + 1; i <= selectedPage + lastPage; i++) {
          if (i <= numberOfPages) {
            emptyArray.push(i);
          } else {
            break;
          }
        }
        setDispayPaginationValue(emptyArray);
      }
    }
  };

  const handlePrevClick = () => {
    console.log("coming");

    // if selectedPage == 1 not go previous
    // if selectedPage === last page then go to 4 no array update
    // if selectedPage === 6 then array update and selected page - 1
    if (selectedPage != 1) {
      handlePage(selectedPage - 1);
      if (selectedPage === dispayPaginationValue[0]) {
        let emptyArray = [];
        for (let i = selectedPage - lastPage; i < selectedPage; i++) {
          emptyArray.push(i);
        }
        setDispayPaginationValue(emptyArray);
      }
    }
  };

  //   useEffect(() => {
  //     if (selectedPage === 5) {
  //       const indexOfSelectedPage = totalPages.indexOf(selectedPage);
  //       const slicedNum = totalPages.slice(
  //         indexOfSelectedPage + 1,
  //         indexOfSelectedPage + 6
  //       );
  //       setShowNumberArray(slicedNum);
  //     }
  //   }, [selectedPage]);
  //   console.log(showNumberArray);

  return (
    <div className="flex flex-wrap gap-2 my-2 px-2 py-2 items-center justify-center">
      <button
        className="bg-[#D2691E] text-[#2D2D2D] rounded-md px-6 py-2"
        onClick={() => handlePrevClick(selectedPage)}
      >
        Prev
      </button>
      {dispayPaginationValue?.map((num) => {
        return (
          <div
            className={`rounded-md w-12 h-12 flex items-center justify-center cursor-pointer ${
              selectedPage === num
                ? "bg-[#D2691E] text-white px-2 py-2"
                : "bg-[#F1EFEA] text-[#2D2D2D] px-2 py-2"
            }`}
            key={num}
            onClick={() => handlePage(num)}
          >
            <span>{num}</span>
          </div>
        );
      })}
      <button
        className="rounded-md text-[#2D2D2D] bg-[#D2691E] px-6 py-2"
        onClick={() => handleNextClick(selectedPage)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
