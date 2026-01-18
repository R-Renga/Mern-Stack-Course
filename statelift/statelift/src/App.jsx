import { useState } from "react";

const ChildA = ({ count, increment }) => {
  return (
    <div>
      <h1>ChildA</h1>
      <button onClick={() => increment(count + 1)}></button>
    </div>
  );
};

const ChildB = ({ count, decrement }) => {
  return (
    <div>
      <h1>ChildB</h1>
      <button onClick={() => decrement(count + 1)}></button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <ChildA count={count} increment={setCount} />
      <ChildB count={count} decrement={setCount} />
    </div>
  );
};

export default App;
