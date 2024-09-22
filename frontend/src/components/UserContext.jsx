import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext() 

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => {
    setToken(false)
    console.log("Logged out, token is now:", token);
  };
  console.log("Token at UserProvider:", token);
  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
