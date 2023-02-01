import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});

export const DepartmentHeading = styled.h2`
  padding: 5px 0;
`;
export const TeamMembersWrapper = styled(Box)({
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const Description = styled('p')(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: darkGray.main,
    '& svg': {
      marginLeft: '12px',
    },
  })
);
