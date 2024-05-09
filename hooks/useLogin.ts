import {useState} from "react";
import axios from "axios";
import {useRouter} from "expo-router";

interface IUseLogin {
  email: string,
  onChangeEmail: Function,
  password: string,
  onChangePassword: Function,
  errors: object,
  login: Function
}

const loginErrorsInitialState = {
  email: "",
  password: "",
}

const useLogin = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState(loginErrorsInitialState);
  const router = useRouter();

  const login = async () => {
    setErrors(loginErrorsInitialState);

    await axios.post(`${process.env.API_URL}/api/users/login`, {
      email,
      password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', res.data.user)

      router.push('/home');
    }).catch((error) => {
      const errors = error.response.data?.errors;
      let errorBag = {};

      Object.keys(errors).forEach((key) => {
        errorBag[key] = errors[key][0]
      });

      setErrors(errorBag)
    });

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