import React, { useEffect, useRef, useState } from "react";

const UseRefTask = () => {
  const [item, setItem] = useState(0);
  const previous = useRef(0);
  useEffect(() => {
    previous.current = item;
  }, [item]);
  return (
    <div>
      <button
        onClick={() => {
          setItem(item + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (item > 0) {
            setItem(item - 1);
          }
        }}
      >
        Decrease
      </button>
      <h1>Current Render : {item}</h1>
      <h1>Previous Render : {previous.current}</h1>
    </div>
  );
};

export default UseRefTask;
