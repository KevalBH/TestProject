import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [noData, setNoData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getApiData = async () => {
    try {
      const result = await axios.get(url);
      if (result) {
        setNoData(false);
      }
      setData(result.data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setData(null);
      if (err.response && err.response.data.message !== "Not found") {
        setNoData(true);
      } else {
        setNoData(false);
      }
      setError(err.message);
    }
  };
  useEffect(() => {
    const abortControl = new AbortController();

    getApiData();
    return () => {
      abortControl.abort();
    };
  }, [url]);

  return { data, isLoading, error, noData };
};

export default useFetch;
