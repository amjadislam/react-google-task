import React from 'react'
import styled from 'styled-components'

type ImageProps = {
  src: string;
  height: number;
  width: number;
  alt:string;
};

const GoogleLogo: React.FC<ImageProps> = ({src, height, width, alt}) => {
  return (
    <>
      <LogoImage src={src} height={height} width={width} alt={alt}/>
    </>
  )
}

const LogoImage = styled.img`
  max-width:100%;
  height: auto;
  vertical-align:middle;
  margin-right:10px
`;

export default GoogleLogo