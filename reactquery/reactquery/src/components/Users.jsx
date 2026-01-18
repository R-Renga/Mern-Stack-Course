import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchUsers = async () => {
  console.log("🌐 API CALL EXECUTED");
  const res = await fetch("https://dummyjson.com/products?limit=3");
  return res.json();
};

const Users = () => {
  const [count,setCount] = useState(0);
  console.log("🔄 Users component RENDER");

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5
  });

  console.log("📊 isLoading:", isLoading);
  console.log("📊 isFetching:", isFetching);
  console.log("📦 data:", data);

  return (
    <div>
      <h2>Products</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Total Products: {data.products.length}</p>
      )}
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  );
};

export default Users;
