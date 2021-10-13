import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

import { Header } from "../components/header/Header";
import { SearchBar } from "../components/search-bar/SearchBar";
import { Container } from "../components/Container";
import { MemberEntries } from "../components/member-entries/MemberEntries";
import { getTeamMembers } from "../services/team-members-api";
import { NotFoundError } from "../services/not-found-error";
import { MembersSubheader } from "../components/page-subheader-container/MembersSubheader";
import { AddMemberContainer } from "../components/add-member-container/AddMemberContainer";

export function TeamMembersPage() {
  const [teamMembers, setTeamMembers] = useContext(StoreContext).teamMembers;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchTeamMembers = async () => {
    const response = await getTeamMembers();

    if (response instanceof NotFoundError) {
      return;
    }

    setTeamMembers(response);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleIsFormOpen = () => setIsFormOpen(!isFormOpen);

  return (
    <>
      <Header />
      <SearchBar count={teamMembers} title="Team members" units="Humanoids" />
      <Container>
        <MembersSubheader handleIsFormOpen={handleIsFormOpen} isFormOpen={isFormOpen} />
        {!isFormOpen && <MemberEntries />}
        {isFormOpen && <AddMemberContainer fetchTeamMembers={fetchTeamMembers} />}
      </Container>
    </>
  );
}

export default TeamMembersPage;
