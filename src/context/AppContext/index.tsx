import { createContext, ReactNode, useContext, useState } from "react";

export const AppContext = createContext({})

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }:AppProviderProps) => {
  
  const [jobOpportunity, setJobOpportunity] = useState([])

  return (
    <AppContext.Provider
      value={{jobOpportunity, setJobOpportunity}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
      throw new Error('useApp must be used within a <AppProvider />');
  }

  return context;
}