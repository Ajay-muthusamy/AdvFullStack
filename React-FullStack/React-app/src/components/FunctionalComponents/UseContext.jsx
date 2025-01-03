import React, { createContext, useState } from "react";
import Comp2 from "./ContextComponents/Comp2";
import StudentResults from "./ContextComponents/StudentResults";
import Comp3 from "./ContextComponents/Comp3";

export var ThemeProvider = createContext();

const UseContext = () => {
  const data = {
    firstName: "ajay",
    lastName: "M",
    age: 20,
  };

  return (
    <div>
      <ThemeProvider.Provider value={{ cpga: "10.00", semester: "5 Sem" }}>
        <h1>This is UseContext Component</h1>
        <Comp3 />
      </ThemeProvider.Provider>
    </div>
  );
};

export default UseContext;
