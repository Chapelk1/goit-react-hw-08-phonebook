import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


export const NavLink = styled(Link)`
    text-decoration: none;
  background-color: #181b1e;
  color: white;
  border: 2px solid teal;
  border-radius: 10px;
  font-weight: 600;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  min-width: 80px;
  margin-top: 30px;
  transition-property: background-color, color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);
    &:not(:last-child){
        margin-right: 16px;
    }

  &:hover,
  :focus {
    background-color: teal;
    outline: none;
  }
`;







