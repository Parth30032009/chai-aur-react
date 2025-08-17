import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-08-08/v1/currencies/${currency}.json`;
        const data = await fetch(url);
        const response = await data.json();
        setData(response[currency]);
      } catch (error) {
        console.error("Error fetching currency data: ", error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
