import React from 'react'
import { Wrapper } from './styles';

const Button = ({ icon, handleClick }) => {
  return (
    <Wrapper onClick={ handleClick }>
      { icon }
    </Wrapper>
  );
}

export default Button;
