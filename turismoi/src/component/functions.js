import React, { useState, useEffect } from 'react';


  export const useFetch = (url, auth) => {
    const [data, setData] = useState([]);
    useEffect( () => {
      fetch(url, auth)
      .then(res => res.json())
      .then(data => setData(data.packages));
    }, []);
    return data;
  };

  export const searchTour = (string, data) => {
    let regex = new RegExp(string, 'i');
    let filtered = data.filter(item => regex.test(item.city_names));
    return filtered;
  }
  
  export const sortPrices = (data) => data.sort((aa,bb) => aa.price > bb.price ? 1 : -1);

  export const sortDays = (data) => data.sort((aa,bb) => aa.days_and_nights > bb.days_and_nights ? 1 : -1);
