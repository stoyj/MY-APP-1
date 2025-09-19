import { useState } from "react";

function Counter() {
  // Дефинираме state променлива count и функция setCount
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Брояч: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Натисни ме 👍</button>
    </div>
  );
}

export default Counter;
