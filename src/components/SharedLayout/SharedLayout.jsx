import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNavigated';
import { UserBar } from 'components/UserBar/UserBar';
import {
  Container,
  Header,
} from 'components/SharedLayout/SharedLayout.styled';
import { Navigation } from 'components/Navigation/Navigation'; 
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export function SharedLayout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
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
