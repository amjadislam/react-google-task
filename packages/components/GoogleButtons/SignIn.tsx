import React from 'react'
import styled from 'styled-components'

type SignInProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const GoogleButton: React.FC<SignInProps> = ({children, onClick}) => {
  return (
    <div>
       <SignIn onClick={onClick}>
        { children }
       </SignIn>
    </div>
  )
}

const SignIn = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 2px #9797a5;
  color: #333;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;

export default GoogleButton