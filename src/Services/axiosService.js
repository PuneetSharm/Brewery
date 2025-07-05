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

export const getListData = async (
  perPage = null,
  selectedPage = 1,
  city = null
) => {
  try {
    const dateNow = Date.now();
    const response = await axiosClient.get("/v1/breweries", {
      params: {
        per_page: perPage,
        page: selectedPage,
        by_city: city,
      },
    });
    const data = response?.data;
    const timeTaken = Math.round((Date.now() - dateNow) / 1000);
    return { data, timeTaken };
  } catch (error) {
    const err = error;
    return err;
  }
};

export const autoCompleteData = async (searchQuery = "") => {
  const response = await axiosClient.get(
    "https://api.openbrewerydb.org/v1/breweries/autocomplete",
    {
      params: {
        query: searchQuery,
      },
    }
  );
  const data = response?.data;
  return data;
};
