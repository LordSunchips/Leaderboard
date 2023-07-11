// export const Leaderboard = [
//     {"id":"3b0bc6fd75f897aaa745ded99dfca436","points":990,"discord":"dystro#7229"},
//     {"id":"ab4b174c720ba02bcded91b3777ea694","points":860,"discord":"abshev#6689"},
//     {"id":"864e827bd796659a16f3f930b72337e1","points":765,"discord":"LordSunchips#3027"},
//     {"id":"e22efce670b5ff07c4033505fa9febd0","points":765,"discord":"Speencer#0456"},
//     {"id":"bfd5e6a40c34d33d329f87f05891cddb","points":765,"discord":"patatoes#4951"},
//     {"id":"4d918b97c9b18bea32fd142f1bb646f3","points":765,"discord":"sushiSelite#3772"},
//     {"id":"1a250a1346ab3cb2571244af31a87a96","points":730,"discord":"Hyper#2582"},
//     {"id":"b2a6ee801bd67bd925e2b45a468b87e7","points":730,"discord":"Blueglass2#8415"},
//     {"id":"be7d0213278018232b33fc3294acf62a","points":715,"discord":"phillip-db#7704"},
//     {"id":"813bb340a47ea2621bf74ab8e55679a9","points":690,"discord":"Adnaan Chida#9543"}
// ]

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DataComponent() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Make an API request when the component mounts
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.hackillinois.org/profile/leaderboard/');
        setData(response.data.profiles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // return an array of objects with the data
    console.log(data);
    return data;
  }