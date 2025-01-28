import React, { useState, createContext, ReactNode } from 'react';

// Define the type for the context value
interface CountContextType {
  weightValue: number;
  setWeightValue: React.Dispatch<React.SetStateAction<number>>;
  heightValue: number,
  setHeightValue: React.Dispatch<React.SetStateAction<number>>;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;

}

// Create the context with a default value
export const AppContext = createContext<CountContextType | undefined>(undefined);

// Define the props for the CountProvider component
interface CountProviderProps {
  children: ReactNode;
}

const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [weightValue, setWeightValue] = useState<number>(0); // Global state defined
  const [heightValue, setHeightValue] = useState<number>(0); // Global state defined
  const [result, setResult] = useState<string>(""); // Global state defined

  return (
    <AppContext.Provider value={{ weightValue, setWeightValue,heightValue,setHeightValue,result,setResult }}>
      {children}
    </AppContext.Provider>
  );
};

export default CountProvider;
