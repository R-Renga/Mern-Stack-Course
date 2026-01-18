import { useState, useDeferredValue } from "react";

function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />

      <p>Immediate value: {text}</p>
      <p>Deferred value: {deferredText}</p>
    </>
  );
}

export default App;
