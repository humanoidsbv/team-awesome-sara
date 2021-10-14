import React, { createContext, useState } from "react";

import { TeamMemberInterface } from "../components/team-member-entries/TeamMemberEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  teamMembers: [teamMembers: TeamMemberInterface[], setTeamMembers: Function];
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreContextProvider({ children }: StoreProviderProps) {
  const context = {
    teamMembers: useState<TeamMemberInterface[]>([]),
    timeEntries: useState<TimeEntryInterface[]>([]),
  };

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}
