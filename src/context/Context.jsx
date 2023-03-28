import { createContext, useState } from "react";

export const MyContext = createContext(null);

export default function MyProvider({ children }) {
  const [superUserLoggedIn, setSuperUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  return (
    <MyContext.Provider
      value={{
        superUserLoggedIn,
        setSuperUserLoggedIn,
        adminLoggedIn,
        setAdminLoggedIn,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
