import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <>
     <Component>
        { children }
     </Component>
    </>
  )
}

export default Container


const Component = styled.div`
  background-color: #dedede;
  padding: 20px;
  text-align: center;
  height: 100vh;
`;