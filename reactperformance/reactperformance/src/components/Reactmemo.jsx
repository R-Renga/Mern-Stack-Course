import React from "react";
import { useState } from "react";

const Child = React.memo((props) => {
    console.log(props,"childrendered");
  return <h1>{props.name.username}</h1>;
});

const ReactMemo = () => {
    const [count,setCount] = useState(0)
  return (
    <>
      <h1>ReactMemo</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}> +</button>
        <Child name="Raja"/>
      {/* <Child name={{username:"raja"}} /> */}
    </>
  );
};

export default ReactMemo;
