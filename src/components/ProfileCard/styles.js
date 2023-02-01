import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ImageWrapper = styled.div`
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  height: 300px;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const UserDetails = styled('p')(
  ({
    theme: {
      palette: { primary, darkBlack, very_black },
    },
  }) => ({
    margin: '0',
    color: '#d5d5d5',
    fontWeight: '200',
    letterSpacing: '1.3px',
    fontSize: '1rem',
    marginTop: '12px 0 0 0',
  })
);
export const UserName = styled('h4')(
  ({
    theme: {
      palette: { primary, darkBlack, very_black },
    },
  }) => ({
    margin: '0',
    color: primary.main,
    fontWeight: '600',
    fontSize: '1.3rem',
  })
);

export const ProfileWrapper = styled('div')(
  ({
    theme: {
      palette: { primary, very_black, darkBlack },
    },
  }) => ({
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    background: very_black?.main,
    overflow: 'hidden',
    cursor: 'grabbing',
    borderRadius: '5px',
  })
);
export const UserRole = styled('h4')(
  ({
    theme: {
      palette: { primary, white },
    },
  }) => ({
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '.875rem',
    fontWeight: '400',
    color: white?.main,
    margin: '0 0 5px 0',
    letterSpacing: '1px',
  })
);

export const Image = styled('img')({
  objectFit: 'cover',
  height: '300px',
  width: '100%',
});
export const ProfileContentWrapper = styled.div`
  padding: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  column-gap: 20px;
`;
export const IconsWrapper = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    marginTop: '2rem',
    display: 'flex',
    paddingRight: '3rem',
    '& svgs': {
      marginRight: '2rem',
      color: white?.main,
      cursor: 'pointer',
    },
  })
);
export const IconBorder = styled(Box)(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    height: '22px',
    width: '22px',
    border: `1px solid ${darkGray?.main}`,
    display: 'flex',
    justifyContent: 'center',
    outline: 'none',
    alignItems: 'center',
    margin: '1px 6px',
    padding: '8px',
    zIndex: '0',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: '.5s all ease',
    '&:hover': {
      transform: 'scale(1)',
      background: '#4d4d4d',
    },
  })
);
