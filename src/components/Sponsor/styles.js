import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';

export const Wrapper = styled(Box)(
  ({
    theme: {
      palette: { lightGray, dark_black },
    },
  }) => ({
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid ${lightGray[100]} `,
    background: dark_black?.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '160px',
    borderRadius: '10px',
    overflow: 'hidden',
    '&:hover .sponsor_url': {
      width: '100%',
      padding: '0 16px',
    },
    '&:hover .sponsor_img': {
      opacity: '0',
      transform: 'scale(0.2)',
    },
  })
);

// Sponsor url
export const Label = styled(Link)({
  position: 'absolute',
  textDecoration: 'none',
  height: '24px',
  textOverflow: 'ellipsis',
  boxSizing: 'border-box',
  width: '0',
  color: '#fff',
  fontSize: '14px',
  letterSpacing: '1px',
  overflow: 'hidden',
  textAlign: 'center',
  transition: '.5s all ease',
  zIndex: '1',
  padding: '0',
});

// Sponsor Image
export const Img = styled('img')({
  height: '45px',
  width: 'auto',
  zIndex: 0,
  opacity: '1',
  transition: '0.4s all ease-in-out',
});
