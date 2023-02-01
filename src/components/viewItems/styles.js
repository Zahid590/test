import styled from '@emotion/styled';

export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const ViewedWrapper = styled('div')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    background: white?.main,
  })
);
export const UserRole = styled('h4')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: '400',
    color: primary?.main,
    margin: '0 0 5px 0',
    letterSpacing: '1px',
  })
);

export const ViewedContentWrapper = styled.div`
  padding: 5px 20px 20px 20px;
`;
