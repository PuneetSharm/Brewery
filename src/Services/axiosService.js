import axiosClient from "../utils/axiosClient";

export const getRandomData = async () => {
  const response = await axiosClient.get("/v1/breweries/random");
  const data = response?.data;
  return data;
};

export const getMetaData = async (perPage = null, selectedPage = 1) => {
  const response = await axiosClient.get("/v1/breweries/meta", {
    params: {
      per_page: perPage,
      // page: selectedPage,
    },
  });
  const data = response;
  return data;
};

export const getListData = async (perPage = null, selectedPage = 1) => {
  const response = await axiosClient.get("/v1/breweries", {
    params: {
      per_page: perPage,
      page: selectedPage,
    },
  });
  const data = response?.data;
  return data;
};
