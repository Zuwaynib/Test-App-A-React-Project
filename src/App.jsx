import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 50)}>
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
