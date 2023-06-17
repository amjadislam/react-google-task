import React from 'react';
import styled from "styled-components"

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Heading>{children}</Heading>;
};


const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export default Title;