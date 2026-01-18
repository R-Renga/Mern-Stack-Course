import { useEffect, useState, useRef } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const observerRef = useRef(null);

  const fetchData = async (skipAmount) => {
    const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${skipAmount}`);
    const response = await data.json();
    setProducts(prev => [...prev, ...response.products]);
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && products.length > 0) {
        setSkip(prev => prev + 20);
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [products.length]);

  useEffect(() => {
    if (skip > 0) {
      fetchData(skip);
    }
  }, [skip]);

  return products.length === 0 ? (
    <div>loading</div>
  ) : (
    <div>
      <h1 style={{textAlign:"center"}}>Infinite Scroll</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((val, idx) => (
          <div
            key={idx}
            style={{
              width: "200px",
              padding: "5px",
              margin: "20px",
              border: "1px solid black",
            }}
          >
            <img
              src={val.thumbnail}
              alt="img"
              style={{ width: "200px", height: "200px" }}
            />
            <span>{val.title}</span>
          </div>
        ))}
      </div>
      <div ref={observerRef} style={{ height: "20px", margin: "20px" }} />
    </div>
  );
};

export default App;


