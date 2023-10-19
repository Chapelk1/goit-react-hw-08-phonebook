import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthNav } from 'components/authNav/AuthNavigated';
import { UserBar } from 'components/UserBar/UserBar';
import {
  Container,
  Header,
} from 'components/SharedLayout/SharedLayout.styled';
import { Navigation } from 'components/Navigation/Navigation'; 
import { useSelector } from 'react-redux';

export function SharedLayout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Container>
        <Header>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserBar />}
        </Header>

        <Suspense fallback={null}>
        <Outlet />
        </Suspense>
      </Container>
    </>
  );
} 
