import React from "react";
import Button from "../Button";
const Count = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ background: "blue", padding: "24px", borderRadius: "8px" }}>
      <Button text="increment" bg="green" color="white" onClick={increment} />
      <span
        style={{
          margin: "0 20px",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {count}
      </span>
      <Button
        text="decrement"
        bg="red"
        color="white"
        onClick={decrement}
        disabled={count === 0}
      />
    </div>
  );
};

export default Count;
