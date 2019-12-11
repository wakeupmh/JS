import { useState, useEffect } from "react";
import axios from "axios";

let config = {
  headers: {
    'x-RapidApi-Host': 'the-cocktail-db.p.rapidapi.com',
    'X-RapidAPI-Key' : '9ea962626emsh3163444be71d8ffp10db64jsnf4a242e5cb77'
  }
}
// custom hook for performing GET request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await axios.get(url, config);
        if (response.status === 200) {
          setData(response.data.drinks);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export default useFetch;