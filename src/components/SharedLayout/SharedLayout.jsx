import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Link,
  Paragraf,
} from 'components/SharedLayout/SharedLayout.styled';
import { AuthNav } from 'components/authNav/AuthNavigated';

export default function SharedLayout() {
  return (
    <>
      <Container>
        <Header>
          <Link to="/contacts">Contacts</Link>
          <AuthNav/>
        </Header>

        {/* <Suspense fallback={<Paragraf>Loading page...</Paragraf>}> */}
          <Outlet />
        {/* </Suspense> */}
      </Container>
    </>
  );
} 
