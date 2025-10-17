import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    const data = response.data;

    setData(data);
    
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            getData();
          }}
        >
          Get Data
        </button>
      </div>

      {data.map((e,indx) => {
        return <h3>hello ,{indx},{e.url}</h3>;
      })}
    </>
  );
};

export default App;
