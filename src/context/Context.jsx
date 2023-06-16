import { createContext, useRef, useState } from "react";
export const MyContext = createContext(null);

export default function MyProvider({ children }) {
  const [superUserLoggedIn, setSuperUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const pricingRef=useRef()
  const featuresRef=useRef()
  const resourceRef=useRef()
  return (
    <MyContext.Provider
      value={{
        superUserLoggedIn,
        setSuperUserLoggedIn,
        adminLoggedIn,
        setAdminLoggedIn,
        pricingRef,
        featuresRef,
        resourceRef
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
