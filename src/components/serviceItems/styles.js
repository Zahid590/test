import styled from '@emotion/styled';

export const UserName = styled.h4`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;
export const ServicesWrapper = styled('div')(
  ({
    theme: {
      palette: { white, primary },
    },
  }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: white?.main,
    padding: '20px 24px',
    marginBottom: '14px',
    cursor: 'pointer',
    '&:hover': {
      color: primary?.main,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '& svg': {
      color: primary?.main,
      marginLeft: '1rem',
    },
  })
);
