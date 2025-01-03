import React, { useContext } from "react";
import { ThemeProvider } from "../UseContext";

const StudentResults = () => {
  const value = useContext(ThemeProvider);

  return (
    <div>
      <h2>Student Results</h2>
      <p>
        <strong> CGPA : </strong> {value.cpga}
        <strong> Semester : </strong> {value.semester}
      </p>
    </div>
  );
};

export default StudentResults;
