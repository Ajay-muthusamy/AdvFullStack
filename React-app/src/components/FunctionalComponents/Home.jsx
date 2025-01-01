import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState([]);
  const [itemTrue, setitemTrue] = useState("heelo");

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
        );
        setdata(response.data.docs);
        console.log(response.data.docs);
      } catch (error) {
        console.log("error in the Fetching Data");
      } finally {
        setitemTrue(true);
      }
    }

    fetchData();
  }, []);

  console.log("UseState data : ", data);
  return (
    <div>
      <div className="container">
        <h1 style={{ color: "blueviolet" }}>Book Author Name</h1>
        {itemTrue ? (
          data.length > 0 ? (
            data.map((item, index) => (
              <div>
                <div key={index}>
                  <h1>{item.author_name}</h1>
                </div>
              </div>
            ))
          ) : (
            <div class="custom-loader"></div>
          )
        ) : (
          <div>
            <div class="custom-loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
