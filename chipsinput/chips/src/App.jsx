import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [chips, SetChips] = useState([]);

  function handleenter(e) {
    if (e.key === "Enter") {
      SetChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  }

  function handlechipsremove(index) {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    SetChips(copyChips);
  }

  return (
    <div>
      <h2>Chips</h2>
      <input
        type="text"
        placeholder="enter the text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleenter(e)}
      />
      <div>
        {chips.map((chip, index) => (
          <div key={index}>
            {chip}
            <button onClick={() => handlechipsremove(index)}>🤞</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
