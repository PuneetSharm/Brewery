import React, { useContext, useEffect, useState } from "react";
import { getListData, getMetaData } from "../Services/axiosService";
import BreweryDetailCard from "../Components/BreweryDetailCard";
import PaginationComponent from "../Components/PaginationComponent";
import { ThemeContext } from "../context/themeContext";

const ListBreweries = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [listBreweriesData, setListBreweriesData] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

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
      const breweriesDataResponse = await getListData(perPage, selectedPage);
      const breweriesData = breweriesDataResponse;
      //   console.log(breweriesData);
      setListBreweriesData(breweriesData);
    };
    listBreweries();
  }, [selectedPage]);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };


  return (
    <div
      className={`container mx-auto`}>
      <h1
        className={`text-5xl font-bold text-center px-4 py-8`}
      >
        Breweries
      </h1>

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
