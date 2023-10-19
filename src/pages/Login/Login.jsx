import { login } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import {
  Form,
  Label,
  Input,
  Btn,
  Wrap,
} from './Login.styled';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleLogIn = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleLogIn}>
      <Wrap>
        <Label>
          Mail:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password:
          <Input type="password" name="password" />
        </Label>
      </Wrap>

      <Btn type="submit"> logIn</Btn>
    </Form>
  );
}





