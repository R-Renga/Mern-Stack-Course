import { useState } from "react";
import CheckBox from "./components/CheckBox";

const data = [
  {
    id: 1,
    name: "outer parent",
    children: [
      {
        id: 2,
        name: "primary1",
        children: [
          {
            id: 4,
            name: "child1",
          },
          {
            id: 5,
            name: "child2",
          },
        ],
      },
      {
        id: 3,
        name: "primary2",
        children: [
          {
            id: 6,
            name: "child3",
          },
          {
            id: 7,
            name: "child4",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "outerparent1",
    children: [
      {
        id: 9,
        name: "primay3",
      },
    ],
  },
  {
    id: 10,
    name: "outerparent3",
  },
];

const App = () => {
  const [isChecked,setIsChecked] = useState({})
  return(
    <div>
      <h1>CheckBox</h1>
      <CheckBox list = {data} checked={isChecked} setIsChecked={setIsChecked}/>
    </div>
  ) 
};

export default App;
