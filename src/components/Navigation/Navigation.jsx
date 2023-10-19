import { Link, Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';


export function Navigation() {
    const isLoggedIn = useSelector(state=> state.auth.isLoggedIn)
    return (
      <Nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Nav>
    );
}











