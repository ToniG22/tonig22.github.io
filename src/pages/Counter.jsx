import React, { useEffect, useState } from "react";
import Display from "./Display";

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Update");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Display count={count} setCount={setCount} />
    </div>
  );
}

export default Counter;
