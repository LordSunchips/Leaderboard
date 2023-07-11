import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DataComponent() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
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