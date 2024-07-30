"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncreament() {
    setCount((c) => c + 1);
  }
  return <button onClick={() => handleIncreament()}>{count}</button>;
}
