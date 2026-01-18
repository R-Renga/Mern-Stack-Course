import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [formData, setFormData] = useState({
    name: "raja",
    age: 28,
    email: "rengaraja@gmail.com",
    Interest: ["coding"],
    theme: "dark",
  });
  const [error, setError] = useState({});
  const TabData = [
    {
      name: "profile",
      Component: Profile,
      validate: () => {
        const err = {};
        if (!formData.name || formData.name.length < 2) {
          err.name = "name is not valid";
        }
        setError(err);
        return err.name ? false : true;
      },
    },
    {
      name: "settings",
      Component: Settings,
    },
    {
      name: "Interest",
      Component: Interest,
    },
  ];

  function handleNextClick() {
    if (TabData[activeNode].validate) {
      setActiveNode((prev) => prev + 1);
    }
  }
  function handlePrevClick() {
    if (TabData[activeNode].validate) {
      setActiveNode((prev) => prev - 1);
    }
  }

  function handleSubmit() {
    console.log(formData);
  }

  const ActiveComponent = TabData[activeNode].Component;
  return (
    <div>
      <div className="tab">
        {TabData.map((tab, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => setActiveNode(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-Body">
        <ActiveComponent
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      </div>
      <div>
        {activeNode > 0 && (
          <button onClick={() => handlePrevClick()}>prev</button>
        )}
        {activeNode < TabData.length - 1 && (
          <button onClick={() => handleNextClick()}>next</button>
        )}
        {activeNode === TabData.length - 1 && (
          <button onClick={() => handleSubmit()}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
