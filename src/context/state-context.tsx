"use client";

import { error } from "console";
import React, { ReactNode, createContext, useState, useContext } from "react";

interface StateContextValue {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const StateContext = createContext<StateContextValue | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
  const [navbarState, setNavbarState] = useState(false);

  function toggleNavbarState() {
    setNavbarState(!navbarState);
  }

  return (
    <StateContext.Provider
      value={{ isOpen: navbarState, setIsOpen: toggleNavbarState }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error("use Statecontext must be within a stateprovider");
  }
  return context;
};
