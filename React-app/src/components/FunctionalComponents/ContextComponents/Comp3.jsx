import React, { useContext } from "react";
import { ThemeProvider } from "../UseContext";

const Comp3 = () => {
  const value = useContext(ThemeProvider);

  return (
    <div>
      <h2>Student Results comp3</h2>
      <p>
        <strong> CGPA : </strong> {value.cpga}
        <strong> Semester : </strong> {value.semester}
      </p>
    </div>
  );
};

export default Comp3;
