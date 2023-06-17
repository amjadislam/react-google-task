import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Title, SubTitle, Button } from "@loginflow/components";
import { getUser } from "../store/actions";

const Homepage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userToken: any = sessionStorage.getItem("userToken");
  const userName: any = sessionStorage.getItem("userName");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    } else {
      dispatch(getUser());
    }
  }, [userToken, navigate]);

  return (
    <Container>
      <Title>Dashboard</Title>
      <SubTitle>Hello: {userName}</SubTitle>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Homepage;
