import { useState } from "react";
import { findNthPrime } from "../helper/helper";
import { useMemo } from "react";

const UseMemo = () => {
  const [text, setText] = useState(0);
  const [theme, setTheme] = useState(true);

  const nthPrime = useMemo(() => findNthPrime(text), [text]);
  //  const nthPrime = findNthPrime(text)
  return (
    <div
      style={{
        margin: "2px",
        padding: "2px",
        width: "400px",
        height: "400px",
        border: "1px solid black",
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <div>
        <button
          onClick={() => setTheme(!theme)}
          style={{ margin: "4px", padding: "4px" }}
        >
          theme change
        </button>
      </div>

      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(Number(e.target.value))}
        />
      </div>

      <div>{nthPrime}</div>
    </div>
  );
};

export default UseMemo;
