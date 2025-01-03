import React, { useMemo, useState } from "react";

var slowFunction = (number) => {
  for (let i = 0; i < 100000000; i++) {}
  return number * 2;
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, SetTheme] = useState(true);
  const [text, SetText] = useState(true);

  var darkLight = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };

  var button = {
    padding:"10px 30px",
    backgroundColor:text ? "#300435" :"grey",
    border:"none",
    marginLeft:"10px",
    borderRadius:"20px",
    cursor:"pointer"  
  };
  async function toggleDark() {
    SetText((buttonText)=>!buttonText);
    SetTheme((prevTheme) => !prevTheme);
  }

  var doublingNumber = useMemo(()=>{return slowFunction(num)},[num])


  return (
    <div>
      <section>
        <h1>This is useMemo Example</h1>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />

        <button onClick={toggleDark} style={button}>{text ? "🌛" : "🌞"}</button>
        <h2 style={darkLight}>
          <h4>{doublingNumber}
          </h4>
        </h2>

      </section>
    </div>
  );
};

export default UseMemo;
