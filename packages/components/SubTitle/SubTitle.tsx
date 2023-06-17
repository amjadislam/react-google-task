import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
};

const SubTitle: React.FC<TitleProps> = ({ children }) => {
  return <SubHeading>{children}</SubHeading>;
};

const SubHeading = styled.h6`
  font-size: 18px;
  color: #777;
`;

export default SubTitle;
