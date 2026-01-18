import Progress from "./components/Progress";

const App = () => {
  const bars = [5, 10, 50, 75, 100];
  return (
    <div className="app">
      <h1>progress Bar</h1>
      {bars.map((val) => (
        <Progress values={val} />
      ))}
    </div>
  );
};

export default App;
