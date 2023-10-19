import { useDispatch, useSelector } from 'react-redux';
import { logout } from "redux/auth/operations"
import { UserNav, Text, Btn } from './UserBar.styled';


export function UserBar() {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.auth.user.name)
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