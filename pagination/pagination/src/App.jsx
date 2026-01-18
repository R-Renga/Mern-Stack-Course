import { useEffect, useState } from "react";
import Productcard from "./components/Productcard";

const App = () => {
  const [products, SetProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const response = await data.json();
    SetProducts(response.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageLimit = 10;
  const totalProducts = products.length;
  const totalPages = totalProducts / pageLimit;
  const start = currentPage * pageLimit;
  const end = start + pageLimit;

  const nextpage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const beforepage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return products.length === 0 ? (
    <h1>no products</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div>
        <button
          disabled={currentPage === 0}
          onClick={() => beforepage()}
        >
          before
        </button>

        {[...Array(10).keys()].map((p) => {
          return (
            <span
              key={p}
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </span>
          );
        })}
        <span onClick={() => nextpage()}>next</span>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((t) => {
          return <Productcard title={t.title} img={t.thumbnail} key={t.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
