import * as Styled from '../styles/Navigation.styled';

export function Navigation ({ isOpen }) {
  return (
    <Styled.Navigation isOpen={isOpen}>
      <li>Timesheets</li>
      <li>Team Members</li>
      <li>Projects</li>
      <li>Clients</li>
      <li>Documents</li>
    </Styled.Navigation>
  )
}
