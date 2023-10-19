import styled from '@emotion/styled';

export const UserNav = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  text-decoration: none;
  color: white;
  font-weight: 500;
  margin-right: 20px;
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid teal;
  background-color: #181b1e;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0);
  font-family: inherit;
  &:hover,
  :focus {
    background-color: teal;
  }
`;





