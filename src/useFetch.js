import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParam) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setdata] = useState(null);

  const fetchMovie = async (url) => {
    setIsLoading(true);

    try {
      const data = await fetch(url);
      const response = await data.json();
      if (response.Response === "True") {
        setdata(response.Search || response);
        setError({ show: false, msg: "" });
      } else {
        setError({
          show: true,
          msg: response.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${urlParam}`);
  }, [urlParam]);

  return { isLoading, error, data };
};

export default useFetch;
