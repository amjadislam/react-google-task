import React from 'react'
import  styled  from 'styled-components'

type ContainerProps = {
    children: React.ReactNode
}

const LoginContainer: React.FC<ContainerProps> = ({children}) => {
  return (
    <>
     <FormContainer>
        { children}
     </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
  text-align: center;
  width: 400px;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 30px 20px;
  border-radius: 10px 10px;
  box-shadow: 0px 0px 5px #dedede;
`;

export default LoginContainer