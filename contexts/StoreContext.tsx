import React, { createContext, useState } from "react";

import { teamMemberInterface } from "../components/member-entries/MemberEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  teamMembers: [teamMembers: teamMemberInterface[], setTeamMembers: Function];
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreContextProvider({ children }: StoreProviderProps) {
  const context = {
    teamMembers: useState<teamMemberInterface[]>([]),
    timeEntries: useState<TimeEntryInterface[]>([]),
  };

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}
