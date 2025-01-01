import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        setData(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  useEffect(()=>{
    
  })

  return (
    <div>
     <h1>{data.userId}</h1>
     <h1>{data.id}</h1>
     <h1>{data.title}</h1>
    </div>
  );
};

export default Contact;
