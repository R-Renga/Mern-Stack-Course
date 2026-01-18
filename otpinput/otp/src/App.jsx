import { useEffect, useRef, useState } from "react";

const otp_digit = 5;
const App = () => {
  const [inputArr, setInputArr] = useState(new Array(otp_digit).fill(""));

  const ref = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
    ref.current[index + 1]?.focus();
  };

  useEffect(() => {
    ref.current[0]?.focus();
  }, []);

  function handlekeydown(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      ref.current[index - 1]?.focus();
    }
  }

  return (
    <div className="App">
      <h1>OTP</h1>
      {inputArr.map((val, index) => (
        <input
          type="text"
          className="otp-input"
          key={index}
          value={inputArr[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          ref={(input) => (ref.current[index] = input)}
          onKeyDown={(e) => handlekeydown(e, index)}
        />
      ))}
    </div>
  );
};

export default App;
