import React, { useState } from "react";

const Hooks = () => {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  return (
    <div style={{margin:"20vh"}}>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <h1>Typing is : {data}</h1>
      <div>
        <button onClick={()=>{setText("Hello EveryBody.....👿 Wish You Happy new New Year....🕺💃👯‍♀️")}}>Click Me 😒</button>
        <h1>{text}</h1>
      </div>
    </div>
    
  );
};

export default Hooks;
