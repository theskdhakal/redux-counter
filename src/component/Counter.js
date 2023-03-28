import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <p>state:{count}</p>
    </div>
  );
};
