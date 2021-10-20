import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

import { Header } from "../components/header/Header";
import { SearchBar } from "../components/search-bar/SearchBar";
import { Container } from "../components/Container";
import { TeamMemberEntries } from "../components/team-member-entries/TeamMemberEntries";
import { getTeamMembers } from "../services/team-members-api";
import { NotFoundError } from "../services/not-found-error";
import { TeamMembersHeader } from "../components/team-members-header/TeamMembersHeader";
import { TeamMemberForm } from "../components/team-member-form/TeamMemberForm";

export function TeamMembersPage() {
  const [teamMembers, setTeamMembers] = useContext(StoreContext).teamMembers;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [sortBy, setSortBy] = useState("date-asc");

  const fetchTeamMembers = async () => {
    const response = await getTeamMembers(sortBy);

    if (response instanceof NotFoundError) {
      return;
    }

    setTeamMembers(response);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, [sortBy]);

  const handleIsFormOpen = () => setIsFormOpen(!isFormOpen);

  return (
    <>
      <Header />
      <SearchBar count={teamMembers.length} title="Team members" units="Humanoids" />
      <Container>
        <TeamMembersHeader
          handleIsFormOpen={handleIsFormOpen}
          isFormOpen={isFormOpen}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        {!isFormOpen && <TeamMemberEntries />}
        {isFormOpen && (
          <TeamMemberForm fetchTeamMembers={fetchTeamMembers} setIsFormOpen={setIsFormOpen} />
        )}
      </Container>
    </>
  );
}

export default TeamMembersPage;
