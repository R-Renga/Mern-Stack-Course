// import { useRef } from "react";

// const UseRefDom = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//     console.log(inputRef.current.value);
//   };
//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>click</button>
//     </div>
//   );
// };

// export default UseRefDom;


//previous value

import { useEffect, useRef, useState } from "react";

function UseRefDom() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);
  console.log(prevCount);

  useEffect(() => {
    prevCount.current = count;
    console.log(prevCount.current);
  }, [count]);

  return (
    <>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}


export default UseRefDom;
