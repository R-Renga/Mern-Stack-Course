import { useState } from "react";

const CheckBox = ({ list, checked, setIsChecked }) => {
  const handleChange = (e, node) => {
    setIsChecked((prev) => {
      const newState = { ...prev, [node.id]: e.target.checked };
      const updateChildren = (node, e) => {
        node.children?.forEach((element) => {
          newState[element.id] = e.target.checked;
          node.children && updateChildren(element, e);
        });
      };
      updateChildren(node, e);

      //if all childrens are checked mark parent also checked
      return newState;
    });
  };
  return (
    <div className="App">
      {list.map((node) => (
        <div key={node.id} className="check">
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e, node)}
          />
          <span> {node.name}</span>
          {node.children && (
            <CheckBox
              list={node.children}
              checked={checked}
              setIsChecked={setIsChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
