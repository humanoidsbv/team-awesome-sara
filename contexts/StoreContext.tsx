import React, { createContext, useState } from "react";

import { TeamMemberInterface } from "../components/team-member-entries/TeamMemberEntries";
import { ClientsInterface, TimeEntryInterface } from "../fixtures/time-entries";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  clients: [clients: ClientsInterface[], setClients: Function];
  teamMembers: [teamMembers: TeamMemberInterface[], setTeamMembers: Function];
  timeEntries: [timeEntries: TimeEntryInterface[], setTimeEntries: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreContextProvider({ children }: StoreProviderProps) {
  const context = {
    clients: useState([]),
    teamMembers: useState([]),
    timeEntries: useState([]),
  };

  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}
