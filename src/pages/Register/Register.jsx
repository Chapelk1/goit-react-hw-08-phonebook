import {register} from 'redux/auth/operations'
import { useDispatch } from 'react-redux';
import { Form, Wrap, Label, Input, Btn} from './Register.styles';



export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, name, password } = e.currentTarget.elements;
    console.log(email.value, name.value, password.value);
    dispatch(
      register({
        email: email.value,
        name: name.value,
        password: password.value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Mail:
        <Input type="email" name="email" />
      </Label>
      <Label>
        Name:
        <Input type="name" name="name" />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" />
      </Label>
      <Btn type="submit"> Create User</Btn>
    </Form>
  );
}









