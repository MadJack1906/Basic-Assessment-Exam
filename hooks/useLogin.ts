import {useState} from "react";

interface IUseLogin {
  email: string,
  onChangeEmail: Function,
  password: string,
  onChangePassword: Function,
  errors: object,
  login: Function
}

const useLogin = () => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let errors = {
      email: "",
      password: "",
    };

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const login = () => {
    validateForm()
  }

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    errors,
    login
  }
}

export default useLogin;