import { Link, Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
      <Nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Nav>
    );
}











