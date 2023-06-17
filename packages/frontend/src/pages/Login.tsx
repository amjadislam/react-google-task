import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LoginContainer,
  PageLayout,
  SignIn,
  GLogo,
  Title,
} from "@loginflow/components";
import { loginWithGoogle } from "@loginflow/api";
import { loginSuccess, loginError } from "../store/actions";
import { googleLogoUrl } from "../assets/constants";

interface UserData {
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
}

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { displayName, email, phoneNumber, photoURL } =
        await loginWithGoogle();
      const userData: UserData = { displayName, email, phoneNumber, photoURL };
      dispatch(loginSuccess(userData));
      navigate("/home");
    } catch (error) {
      dispatch(loginError(error));
    }
  };

  return handleLogin;
};

const Login: FC = () => {
  const handleLogin = useLogin();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <PageLayout>
      <LoginContainer>
        <Title>Firebase Authentication</Title>
        <SignIn onClick={handleLogin}>
          <GLogo src={googleLogoUrl} width={35} height={20} alt="Google Logo" />
          Continue with Google
        </SignIn>
      </LoginContainer>
    </PageLayout>
  );
};

export default Login;
