import { useState, useEffect } from "react";

const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setRecipe(cache[input]);
      return;
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const result = await data.json();
    setRecipe(result?.recipes || []);
    setCache((prev) => ({
      ...prev,
      [input]: result?.recipe,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  console.log(recipe);

  return (
    <div className="App">
      <h1>AutoComplete</h1>
      <div>
        <input
          type="text"
          className="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="search-results">
          {recipe.map((r) => (
            <span className="results" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
