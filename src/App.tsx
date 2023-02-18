import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Child from "./components/Child";
import { CounterContext } from "./context/CounterContext";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter }}>
      <div className="App">
        <header className="App-header">
          <Counter setCounter={setCounter}>
            <Child />
          </Counter>
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
