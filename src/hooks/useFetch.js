import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  
  const a = async () =>{
    await axios.get(url)
      .then((res) => {
        setData(res.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    a();
  }, []);

  return data;
}