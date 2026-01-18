import { useCallback } from "react";
import { useState } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
}

const Usecallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("handleclickcalled");
  }, []);
  return (
    <div>
      <h1>parent</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Usecallback;
