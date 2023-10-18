import { Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { Contacts } from "pages/Contacts/Contacts";
import { RegisterForm } from "pages/Register/Register";
import { LoginForm } from "pages/Login/Login";


export function App() {
  

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="register" element={<RegisterForm />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
}
































