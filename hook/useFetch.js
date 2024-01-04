import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

//   const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: 'Python developer in Texas, USA',
//     page: '1',
//     num_pages: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': '5d7ac5cc8dmshd9942114232e163p189739jsn94baef103c71',
//4a21e83e81msh60752306901f98ap1c09d5jsn9c76e692d65d
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '4a21e83e81msh60752306901f98ap1c09d5jsn9c76e692d65d',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
