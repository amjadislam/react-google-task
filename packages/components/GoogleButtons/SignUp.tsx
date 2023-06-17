import React from 'react'
import styled from 'styled-components'

type SignUpProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const GoogleButton: React.FC<SignUpProps> = ({children, onClick}) => {
  return (
    <div>
       <SignUp onClick={onClick}>
        { children }
       </SignUp>
    </div>
  )
}

const SignUp = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  color: #333;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;

export default GoogleButton