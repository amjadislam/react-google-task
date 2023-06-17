import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <OuterLayout>{children}</OuterLayout>
    </>
  );
};

const OuterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #44c3c3;
`;

export default PageLayout;
