import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Mod = styled.div`
  max-width: 600px;
  height: 400px;
  background-color: #181b1e;
  border-radius: 8px;
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
