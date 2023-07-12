import { createContext, useRef, useState } from "react";
export const MyContext = createContext(null);

export default function MyProvider({ children }) {
  const [ isLoading, setLoading] = useState(false);
  const pricingRef=useRef()
  const featuresRef=useRef()
  const resourceRef=useRef()
  return (
    <MyContext.Provider
      value={{
        pricingRef,
        featuresRef,
        resourceRef,
        isLoading,
        setLoading
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
