import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

export const AboutHeading = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '70px',
    color: white?.main,
    fontWeight: 'bold',
    lineHeight: '1',
  })
);

export const AboutDesc = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontFamily: 'Poppins',
    letterSpacing: '0.22px',
    fontSize: '22px',
    color: white?.main,
    lineHeight: '1.5',
    marginTop: '40px',
    marginBottom: '40px',
  })
);

export const StyledBox = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    padding: '200px 0px 150px 0px',
    backgroundColor: primary?.main,
    display: 'flex',
    position: 'relative',
  })
);
export const MainBox = styled(Box)({});
export const ImgBox = styled(Box)({
  '& img': {
    width: '100%',
    height: '100%',
  },
});
