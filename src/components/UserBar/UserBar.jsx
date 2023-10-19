import { useDispatch, useSelector } from 'react-redux';
import { logout } from "redux/auth/operations"
import { UserNav, Text, Btn } from './UserBar.styled';
import { getUser } from 'redux/selectors';

export function UserBar() {
    const dispatch = useDispatch()
    const userName = useSelector(getUser);
    const handleLogout = () => {                   
        dispatch(logout())
    }

    return (
      <UserNav>
        <Text>Hello, {userName}</Text>
        <Btn type="button" onClick={handleLogout}>
          logout
        </Btn>
      </UserNav>
    );
}