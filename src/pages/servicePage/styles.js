import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MainBox = styled(Box)({});
export const ServicesItemWrapper = styled(Box)(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    backgroundColor: lightnessWhite.main,
    padding: '40px',
  })
);
export const ServicesImageWrapper = styled(Box)(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    marginTop: '40px',
    '& img': {
      width: '100%',
    },
  })
);
