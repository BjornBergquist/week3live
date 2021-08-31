import { useState, useEffect } from "react";

export const StoreView = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Hej dotNet20D!");
    return () => {
      alert("Hejdå!");
    };
  }, []);

  return (
    <div>
      <h1>Our Amazing Product</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
      >
        -
      </button>
    </div>
  );
};
