import React, { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";

import { Header } from "../components/header/Header";
import { SearchBar } from "../components/search-bar/SearchBar";
import { Container } from "../components/Container";
import { MemberEntries } from "../components/member-entries/MemberEntries";
import { getTeamMembers } from "../services/team-members-api";
import { NotFoundError } from "../services/not-found-error";
import { PageSubheaderWrapper } from "../components/page-subheader-wrapper/PageSubheaderWrapper";

export function TeamMembersPage() {
  const [teamMembers, setTeamMembers] = useContext(StoreContext).teamMembers;

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

  return (
    <>
      <Header />
      {/* Bij header doorgeven dat we op pagina team-members zitten met props. */}
      <SearchBar units="Humanoids" title="Team members" count={teamMembers} />
      <Container>
        <PageSubheaderWrapper />
        <MemberEntries />
      </Container>
    </>
  );
}

export default TeamMembersPage;
