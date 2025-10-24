import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Challenge: EASY</h1>
      <p>
        Task: Create a simple counter app using React hooks. Implement the
        buttons to Increment and Decrement in the counter value
      </p>
      <section>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      </section>
    </main>
  );
}
