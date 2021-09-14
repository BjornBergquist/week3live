import { useState, useEffect } from "react";

export const StoreView = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hej dotNet20D!");
    return () => {
      console.log("Hejdå!");
    };
  }, [count]);

  return (
    <main>
      <section>
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
      </section>
    </main>
  );
};
