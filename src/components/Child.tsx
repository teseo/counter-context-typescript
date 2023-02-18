import React from "react";
import { CounterContext } from "../context/CounterContext";

const Child: React.FC<{}> = () => {
  return (
    <div>
      <CounterContext.Consumer>
        {({ counter }) => {
          return <> Current counter: {counter}</>;
        }}
      </CounterContext.Consumer>
    </div>
  );
};

export default Child;
