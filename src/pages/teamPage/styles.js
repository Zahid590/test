import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';

export const MainBox = styled(Box)({});
export const ServicesItemWrapper = styled('div')(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    backgroundColor: lightnessWhite.main,
    padding: '40px',
    margin: '2rem 0',
  })
);
export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});
