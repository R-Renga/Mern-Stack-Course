import { useState } from "react";

const Accordian = ({ props ,name}) => {
  console.log(props,name);
  const [openIndex, setOpenIndex] = useState(null);

  function expandAccordian(index) {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div>
      {props.map((t, index) => {
        return (
          <div key={index}>
            <button onClick={() => expandAccordian(index)}>{t.title}</button>
            {openIndex === index && <div>{t.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
