import React, { useState, useEffect } from "react";
import axios from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: "/search",
        params: {
          limit: 50,
          term: searchTerm,
          location: "istanbul",
        },
      });
      const {
        data: { businesses },
      } = response;
      setResults(businesses);
      setErrorMessage("");
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage, isLoading];
};
