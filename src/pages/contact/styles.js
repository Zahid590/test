import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

export const MapSection = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    backgroundColor: white?.main,
    display: 'flex',
    alignItems: 'center',
    '& iframe': {
      width: '100%',
      height: '30rem',
    },
    '@media (max-width: 700px)': {
      flexWrap: 'wrap',
    },
  })
);
export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignISStems: 'center',
  padding: '61px',
  height: '300px',
});
export const Title = styled(Typography)(
  ({
    theme: {
      palette: { black },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '44px',
    color: black?.main,
    fontWeight: 'bold',
    lineHeight: '1',
  })
);
export const Para = styled(Typography)(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    fontFamily: 'Poppins',
    letterSpacing: '0.22px',
    fontSize: '15px',
    color: lightGray?.main,
    lineHeight: '1.5',
    marginTop: '40px',
    marginBottom: '40px',
  })
);
