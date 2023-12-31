import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  width: 600px;
  margin: 0 auto;
  padding-bottom: 80px;
`;
export const Title = styled.h1`
  text-align: center;
  color: white;
`;

export const SecondTitle = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 20px;
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

  &:hover,
  :focus {
    background-color: teal;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;