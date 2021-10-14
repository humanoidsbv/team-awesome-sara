import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/StoreContext";

import { TeamMemberInterface } from "../team-member-entries/TeamMemberEntries";
import { saveTeamMember } from "../../services/team-members-api";

import * as Styled from "./TeamMemberForm.styled";

interface AddMemberContainerInterface {
  fetchTeamMembers: Function;
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

    const updatedTeamMember = {
      address: newTeamMember.address,
      bio: newTeamMember.bio,
      emailAddress: newTeamMember.emailAddress,
      employeeNumber: `HUM_${teamMembers.length + 1}`,
      firstName: newTeamMember.firstName,
      lastName: newTeamMember.lastName,
      locality: newTeamMember.locality,
      postalCode: newTeamMember.postalCode,
      socials: newTeamMember.socials,
      startDate: new Date().toString(),
    };

    saveTeamMember(updatedTeamMember);
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
      <Styled.Form id="my-form" onSubmit={handleSubmit}>
        <div className="div-form-left">
          <div className="full-name-div">
            <Styled.Label htmlFor="firstName">
              First Name
              <Styled.Input
                id="firstName"
                name="firstName"
                onChange={handleChange}
                placeholder="Niels"
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
                placeholder="Brandhorst"
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
              placeholder="Niels.Brandhorst@humanoids.nl"
              required
              type="email"
            />
          </Styled.Label>
          <Styled.Label htmlFor="bio">Bio</Styled.Label>
          <Styled.TextArea
            name="bio"
            onChange={handleChange}
            placeholder="Niels is a tech savy Architect and Entrepreneur, maintaining a keen interest in software and design tools, such as parametric modelling (Rhino/Grasshopper) and BIM. "
            required
          />
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
                placeholder="2521 CJ"
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
              placeholder="@nbrandhorst"
              required
              type="text"
            />
          </Styled.Label>
        </div>
      </Styled.Form>
    </Styled.TeamMemberForm>
  );
}
