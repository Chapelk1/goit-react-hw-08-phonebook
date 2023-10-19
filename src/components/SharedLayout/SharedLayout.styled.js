import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;


export const Paragraf = styled.p`
  font-size: 20px;
  color: white;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid teal;

  > nav {
    display: flex;
  }
`;