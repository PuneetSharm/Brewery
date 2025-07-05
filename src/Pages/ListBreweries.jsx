import React, { useContext, useEffect, useState } from "react";
import {
  autoCompleteData,
  getListData,
  getMetaData,
} from "../Services/axiosService";
import BreweryDetailCard from "../Components/BreweryDetailCard";
import PaginationComponent from "../Components/PaginationComponent";
import { ThemeContext } from "../context/themeContext";
import DropDown from "../Components/dropDown";
import { selectCityOptions } from "../utils/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";

const ListBreweries = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [listBreweriesData, setListBreweriesData] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("cityName") || "";
  // const [autoCompleteData, setAutoCompleteData] = useState();

  const [selectedCityName, setSelectedCityName] = useState(city);

  const perPage = 10;

  useEffect(() => {
    const metaData = async () => {
      const response = await getMetaData(100);
      const data = response?.data;
      const total = data?.total;
      setTotalCount(total);
    };
    metaData();

    const listBreweries = async () => {
      if (selectedCityName === "") {
        const breweriesDataResponse = await getListData(perPage, selectedPage);
        const breweriesData = breweriesDataResponse?.data;
        // console.log(breweriesDataResponse);
        console.log(breweriesData);
        setListBreweriesData(breweriesData);
      } else {
        const breweriesDataResponse = await getListData(
          perPage,
          selectedPage,
          selectedCityName
        );
        const breweriesData = breweriesDataResponse?.data;
        // console.log(breweriesDataResponse);
        console.log(breweriesData);
        setListBreweriesData(breweriesData);
      }
    };
    listBreweries();
    // const autoCompleteResponse = async () => {
    //   if (searchInputValue !== "") {
    //     const getAutoCompleteResponse = await autoCompleteData(
    //       searchInputValue
    //     );
    //     console.log(getAutoCompleteResponse);
    //     setAutoCompleteData(getAutoCompleteResponse);
    //   }
    // };
    // autoCompleteResponse();
  }, [selectedPage, selectedCityName]);

  console.log(searchInputValue);

  const handleInputSearch = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  const handleSelectedOption = (selectedOption) => {
    setSelectedCityName(selectedOption);
    setSearchParams({ cityName: selectedOption });
  };

  return (
    <div className={`container mx-auto`}>
      <h1 className={`text-5xl font-bold text-center px-4 py-8`}>Breweries</h1>
      <SearchBox
        handleInputSearch={handleInputSearch}
        searchInputValue={searchInputValue}
      />
      <div className="my-8 w-1/6">
        <DropDown
          options={selectCityOptions}
          handleSelectedOption={handleSelectedOption}
          selectedCityName={selectedCityName}
        />
      </div>

      {listBreweriesData?.map((brewery) => {
        return (
          <BreweryDetailCard data={brewery} key={brewery.id} apiKey={apiKey} />
        );
      })}
      {totalCount !== 0 ? (
        <PaginationComponent
          perPage={perPage}
          handlePage={handlePageClick}
          selectedPage={selectedPage}
          totalCount={totalCount}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListBreweries;
