export const fetchData = () => {
  return fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "189399ba-be84-44c4-8075-cf0eaa9cf8a1",
      },
    }
  );
};
