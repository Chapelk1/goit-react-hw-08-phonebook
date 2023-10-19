import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';



export const Nav = styled.nav`

`


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border: 2px solid teal;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);

  &:hover,
  :focus {
    background-color: teal;
  }
  &.active {
    background-color: teal;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
