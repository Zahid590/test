import styled from '@emotion/styled';
import { Box, Grid, Paper } from '@mui/material';

export const StyledGrid = styled(Grid)({
  marginTop: '0px',
});

export const LinksWrapper = styled(Box)(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: lightGray?.main,
  })
);

export const MenuLinks = styled('a')(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: lightGray?.main,
    marginBottom: '10px',
  })
);

export const Item = styled(Paper)({
  padding: '0 0 24px 0',
  boxShadow: 'none',
  borderRadius: 'none',
});

export const AddressWrapper = styled('div')(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    marginTop: '40px',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: lightGray?.main,
  })
);

export const Address = styled.p``;

export const IconsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  svg {
    margin-right: 24px;
    cursor: pointer;
  }
`;

export const Contact = styled.p`
  margin-top: 40px;
`;

export const DesignedBy = styled('p')(
  ({
    theme: {
      palette: { lightGray, gray93 },
    },
  }) => ({
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: lightGray?.main,
    background: gray93?.main,
    padding: '25px',
    margin: '0',
  })
);
