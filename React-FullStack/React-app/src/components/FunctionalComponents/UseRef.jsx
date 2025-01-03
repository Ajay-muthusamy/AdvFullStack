import React, { useEffect, useRef, useState } from "react";

// to implement a UseRef is used to useState,UseEffect
const UseRef = () => {
  var [text, setText] = useState(0);
  var prevText = useRef(0);

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <section>
        <h1>This ia an example of useRef</h1>
        <input type="number" onChange={(e) => setText(e.target.value)} />
        <h1>My Current Render is {text}</h1>
        <h1>My Previous Render is {prevText.current}</h1>
      </section>
    </div>
  );
};

export default UseRef;
