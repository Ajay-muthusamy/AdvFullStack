import React, { useContext } from "react";
import { ThemeProvider } from "../UseContext";

const Comp2 = () => {
  const value = useContext(ThemeProvider);

  return (
    <div>
      <h2>Student Results Comp2</h2>
      <p>
        <strong> CGPA : </strong> {value.cpga}
      </p>
    </div>
  );
};

export default Comp2;