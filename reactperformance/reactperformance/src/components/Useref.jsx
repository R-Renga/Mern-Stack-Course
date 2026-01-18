import { useEffect } from "react";
import { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  let x = useRef(5);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          x.current += 1;
          console.log(x.current);
        }}
      >
        increment x
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default UseRef;
