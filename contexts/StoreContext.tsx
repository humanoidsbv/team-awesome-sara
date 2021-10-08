import React, { createContext, useState } from "react";

import { TimeEntryInterface } from "../fixtures/time-entries";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreContextProvider({ children }: StoreProviderProps) {
  const context = {
    timeEntries: useState<TimeEntryInterface[]>([]),
  };

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}
