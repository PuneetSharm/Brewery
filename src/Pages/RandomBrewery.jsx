import { useEffect, useState } from "react";
import ReactMap from "../Components/reactMap";
import { getRandomData } from "../Services/axiosService";
import BreweryDetailCard from "../Components/BreweryDetailCard";

const RandomBrewery = () => {
  const [randomBreweryData, setRandomBreweryData] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const randomBrewery = async () => {
      const randomBreweryResponse = await getRandomData();
      const randomBreweryData = randomBreweryResponse;
      setRandomBreweryData(randomBreweryData);
    };
    randomBrewery();
  }, []);
  console.log(randomBreweryData);
  return (
    <div className="container mx-auto my-4 text-[#2D2D2D]">
      <h1 className="text-5xl font-bold text-center text-[#2D2D2D]">
        Random Brewery
      </h1>
      <div className="w-full flex">
        {randomBreweryData?.map((item) => {
          return <BreweryDetailCard data={item} />;
        })}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <ReactMap apiKey={apiKey} />
      </div>
    </div>
  );
};
export default RandomBrewery;
