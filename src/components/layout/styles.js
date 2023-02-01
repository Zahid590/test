import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

export const AboutHeading = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'relative',
    fontFamily: 'Poppins',
    fontSize: '70px',
    color: white?.main,
    fontWeight: 'bold',
    lineHeight: 1,
    margin: '20px 0',
    textAlign: 'center',
    textTransform: 'capitalize',
    '&:before': {
      content: `' '`,
      position: 'absolute',
      display: 'block',
      top: 0,
      backgroundColor: white?.main,
      borderRadius: '5px 5px 5px 5px !important',
      width: '3px',
      height: '40px',
      marginTop: '-57px',
      left: '50%',
    },
  })
);

export const MainBox = styled(Box)(
  ({
    theme: {
      palette: { primary, gradient },
    },
  }) => ({
    paddingTop: '105px',
    paddingBottom: '70px',
    backgroundColor: primary?.main,
    backgroundImage: gradient,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  })
);

export const Details = styled(Box)(
  ({
    theme: {
      palette: { white, mediumGray },
    },
  }) => ({
    textAlign: 'center',
    '& ol': {
      justifyContent: 'center',
    },
    '& li': {
      color: mediumGray.main,
      '& a': {
        fontSize: '16px',
        '&:hover': {
          color: white?.main,
          textDecoration: 'none',
          fontWeight: 'bold',
        },
      },
    },
    '& p': {
      color: white?.main,
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  })
);
