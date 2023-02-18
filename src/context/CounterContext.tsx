import { createContext } from "react";

export type ContextType = {
  counter: number;
};

export const CounterContext = createContext({ counter: 0 });
