import React, { useContext } from "react";
import ReactMap from "./reactMap";
import { ThemeContext } from "../context/themeContext";

const BreweryDetailCard = ({ data }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div
      className={`w-full border-b-4 border-[#DADADA] text-base font-semibold inline-flex flex-col odd:bg-[#FFF2E0] even:bg-[#F1ECE4]`}
    >
      <div className="text-[#2D2D2D] my-4 flex justify-between">
        <div className="mx-4">
          {data?.name && (
            <p className="text-2xl font-bold text-[#6B5E51]">
              <a href={data.website_url} className="hover:text-[#B05A16]">
                {data?.name}
              </a>
            </p>
          )}
          {data?.brewery_type && (
            <p className="text-[#8f887f]">
              Brewery Type - {data?.brewery_type}
            </p>
          )}
          <div className="my-4">
            {data?.address_1 && <p>Address - {data?.address_1}</p>}
            {data?.postal_code && <p>Postal Code - {data?.postal_code} </p>}
            {data?.city && <p>City - {data?.city}</p>}
            {data?.state && <p>State - {data?.state}</p>}
            {data?.country && <p>Country - {data?.country}</p>}
            {data?.phone && <p>Mobile - {data?.phone}</p>}
          </div>
        </div>
        {data?.latitude && data?.longitude ? (
          <div className="mx-4 my-2">
            <ReactMap apiKey={apiKey} />
          </div>
        ) : (
          <div className="mx-16 my-2 flex items-center text-lg">
            <p>Location not available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreweryDetailCard;
