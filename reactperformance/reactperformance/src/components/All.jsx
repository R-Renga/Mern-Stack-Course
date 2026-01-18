import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";

const Child = React.memo((props) => {
  console.log(props, "childrendered");
  return (
    <>
      <h1>{props.name.username}</h1>
      <button onClick={props.clickfunction}>click</button>
    </>
  );
});

const All = () => {
  const [count, setCount] = useState(0);

  const data = useMemo(() => ({ username: "raja" }), []);

  const handleClick = useCallback(() => {
    console.log("handleclick called");
  }, []);
  return (
    <>
      <h1>ReactMemo</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> +</button>
      <Child name={data} clickfunction={handleClick} />
    </>
  );
};

export default All;
