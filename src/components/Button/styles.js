import styled from '@emotion/styled';
import { Button } from '@mui/material';

const sizes = {
  sm: '34px',
  md: '44px',
  lg: '48px',
};

export const StyledButton = styled(Button)(({ size }) => ({
  padding: '11px 15px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  borderRadius: 'unset',
  height: sizes[size] || sizes['md'],
}));
