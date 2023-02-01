import styled from '@emotion/styled';
import { Typography, Box, Input, TextareaAutosize } from '@mui/material';
import Button from '../Button';

export const ContactWrapper = styled('div')({
  padding: '0 20px',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ContactMessage = styled(Typography)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '32px',
    textAlign: 'center',
    fontWeight: 600,
    color: primary?.main,
  })
);
export const Title = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    color: white?.main,
    marginBottom: '2rem',
  })
);
export const Text = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '1rem',
    fontWeight: 100,
    margin: '4px',
    color: white?.main,
    letterSpacing: '1.2px',
  })
);
export const SubTitle = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontSize: '1rem',
    fontWeight: 500,
    color: white?.main,
    marginTop: '56px',
    marginBottom: '12px',
  })
);
export const ContactText = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    display: 'flex',
    marginTop: '20px',
    fontSize: '1.3rem',
    fontWeight: 100,
    color: white?.main,
    width: '70%',
  })
);

export const FormWrapper = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    // backgroundColor: white?.main,
    boxSizing: 'border-box',
    // padding: '40px 20px',
    borderRadius: '10px',
  })
);

export const InputWrapper = styled(Box)({
  display: 'block',
  width: '70%',
});

export const StyledInput = styled(Input)(
  ({
    theme: {
      palette: { primary, lightGray, white },
    },
  }) => ({
    width: '100%',
    fontSize: '16px',
    margin: '20px 0',
    height: '40px',
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '& input': {
      color: white.main,
      padding: '12px 0',
      borderBottom: `1px solid ${white?.main} !important`,
    },
    '& input:focus': {
      color: '#fff',
      outline: 'none',
      borderBottom: `1px solid ${white?.main} !important`,
    },
  })
);
export const StyledTextArea = styled(TextareaAutosize)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    width: '100%',
    margin: '20px 0',
    borderBottom: `1px solid ${white?.main} !important`,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    fontSize: '16px',
    fontFamily: 'Poppins',
    color: white.main,
    background: 'transparent',
    '&:focus-visible': {
      outline: 'none',
      borderBottom: `1px solid ${white?.main} !important`,
    },
  })
);

export const ContactButton = styled(Button)(({ theme: { palette: lightGray } }) => ({
  height: '48px',
  textTransform: 'uppercase',
  border: `1px solid ${lightGray[100]} !important`,
}));
export const ContactDetails = styled(Box)({});
export const ContactItem = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      display: 'none',
      color: white?.main,
      fontSize: '1rem',
    },
  })
);

// icon wrapper
export const IconsWrapper = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    marginTop: '3rem',
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
