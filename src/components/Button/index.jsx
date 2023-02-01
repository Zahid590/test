import React from 'react';
import { StyledButton } from './styles';

const Button = ({ sx, children, onClick, size = 'md', ...rest }) => {
  return (
    <StyledButton sx={{ sx }} size={size} onClick={onClick} {...rest} disableRipple>
      {children}
    </StyledButton>
  );
};

export default Button;
