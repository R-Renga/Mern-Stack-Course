import Accordian from "./components/Accordian";

const App = () => {
  const Items = [
    {
      title: "javascript",
      content: "i love javascript it was a good learning curve",
    },
    {
      title: "react",
      content: "react is a js library,its used to make reusable components",
    },
    {
      title: "nodejs",
      content: "nodejs runtime environment,its built on v8 engine",
    },
  ];
  return <Accordian props={Items} name="raja" />;
};

export default App;
