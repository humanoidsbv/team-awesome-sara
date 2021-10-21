import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";

import { TeamMemberInterface } from "../team-member-entries/TeamMemberEntries";
import { saveTeamMember } from "../../services/team-members-api";

import * as Styled from "./TeamMemberForm.styled";

interface AddMemberContainerInterface {
  fetchTeamMembers: Function;
  // eslint-disable-next-line no-unused-vars
  setIsFormOpen: (value: React.SetStateAction<boolean>) => void;
}

export function TeamMemberForm({ fetchTeamMembers, setIsFormOpen }: AddMemberContainerInterface) {
  const [newTeamMember, setNewTeamMember] = useState<TeamMemberInterface>({});
  const [teamMembers] = useContext(StoreContext).teamMembers;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setNewTeamMember({ ...newTeamMember, [name]: value });
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const formattedTeamMember = {
      address: newTeamMember.address,
      bio: newTeamMember.bio,
      date: new Date().toString(),
      emailAddress: newTeamMember.emailAddress,
      employeeNumber: `HUM_${teamMembers.length + 1}`,
      firstName: newTeamMember.firstName,
      lastName: newTeamMember.lastName,
      locality: newTeamMember.locality,
      name: `${newTeamMember.firstName} ${newTeamMember.lastName}`,
      postalCode: newTeamMember.postalCode,
      socials: newTeamMember.socials,
    };

    saveTeamMember(formattedTeamMember);
    fetchTeamMembers();
    setNewTeamMember({});
    event.target.reset();
    setIsFormOpen(false);
  };

  const randomNumber = Math.floor(Math.random() * 100000 + 1);

  return (
    <Styled.TeamMemberForm>
      <div className="tab-container">
        <div className="tab"> Personal Details</div>
      </div>
      <Styled.ProfilePicture>
        <img src={`https://source.unsplash.com/random/50x50?sig=${randomNumber}`} alt="" />
        <p>Edit Picture</p>
      </Styled.ProfilePicture>
      {/* TO DO: refactor to the React way. Form id points to the submit button with the same id. */}
      <Styled.Form id="my-form" onSubmit={handleSubmit}>
        <div className="div-form-left">
          <div className="full-name-div">
            <Styled.Label htmlFor="firstName">
              First Name
              <Styled.Input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                placeholder="John"
                required
                type="text"
              />
            </Styled.Label>
            <Styled.Label htmlFor="lastName">
              Last Name
              <Styled.Input
                id="lastName"
                name="lastName"
                onChange={handleChange}
                placeholder="Doe"
                required
                type="text"
              />
            </Styled.Label>
          </div>
          <Styled.Label htmlFor="email-address">
            Email Address
            <Styled.Input
              id="email-address"
              name="email-address"
              onChange={handleChange}
              placeholder="JohnDoe@humanoids.nl"
              required
              type="email"
            />
          </Styled.Label>
          <Styled.Label htmlFor="bio">Bio</Styled.Label>
          <Styled.TextArea name="bio" onChange={handleChange} required />
        </div>
        <div className="div-form-right">
          <Styled.Label htmlFor="address">
            Address
            <Styled.Input
              id="address"
              name="address"
              onChange={handleChange}
              placeholder="Waldopstraat"
              required
              type="text"
            />
          </Styled.Label>
          <div className="postalCode-locality">
            <Styled.Label htmlFor="postalCode">
              Postal Code
              <Styled.Input
                id="postalCode"
                name="postalCode"
                onChange={handleChange}
                placeholder="2012 CJ"
                required
                type="text"
              />
            </Styled.Label>
            <Styled.Label htmlFor="locality">
              Locality
              <Styled.Input
                id="locality"
                name="locality"
                onChange={handleChange}
                placeholder="Den Haag"
                required
                type="text"
              />
            </Styled.Label>
          </div>
          <Styled.Label htmlFor="socials">
            Social Profiles
            <Styled.Input
              name="socials"
              onChange={handleChange}
              placeholder="@vliegendegarnaal"
              required
              type="text"
            />
          </Styled.Label>
        </div>
      </Styled.Form>
    </Styled.TeamMemberForm>
  );
}
