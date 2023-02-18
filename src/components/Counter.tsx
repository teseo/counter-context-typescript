import React from "react";
import { CounterContext } from "../context/CounterContext";

type PropsWithChildren = {
  children?: React.ReactNode;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Counter: React.FC<PropsWithChildren> = ({ children, setCounter }) => {
  return (
    <CounterContext.Consumer>
      {({ counter }) => {
        return (
          <div>
            <h2>Counter</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment +</button>
            <button onClick={() => setCounter(counter - 1)}>Increment -</button>
            {children}
          </div>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Counter;
