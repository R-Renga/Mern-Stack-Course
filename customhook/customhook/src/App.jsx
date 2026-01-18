import useCounter from "./utils/useCounter";

const App = () => {
  const {count,increment,decrement} = useCounter(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App;