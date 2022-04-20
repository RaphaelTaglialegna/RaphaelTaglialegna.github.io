import React from 'react';
import LogoS from '../../../../assets/images/raphaCat.png';
import { PhotoContainer } from './style';

const ImageEffect = () => {
 
  return (
    <PhotoContainer className="logo-container" >
        <img
          className="solid-logo"
          src={LogoS}
          alt="JavaScript,  Developer"
        />        
    </PhotoContainer>
  )
}

export default ImageEffect;
