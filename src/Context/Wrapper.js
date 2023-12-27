import { createContext, useState } from "react";

export const Store = createContext();

export const Wrapper = ({ children }) => {
  const [data, setData] = useState("hello");
  return <Store.Provider value={{ data, setData }}>{children}</Store.Provider>;
};
