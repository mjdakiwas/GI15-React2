import { useState } from "react";
import "../styles/counter-app/counterPg.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-pg">
      <h1>Challenge: EASY</h1>
      <p>
        Task: Create a simple counter app using React hooks. Implement the
        buttons to Increment and Decrement in the counter value
      </p>
      <section className="counter__container">
        <h2 className="counter__title">Count</h2>
        <button
          className="counter__btn"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <p className="counter">{count}</p>
        <button
          className="counter__btn"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </section>
    </main>
  );
}
