import styled from '@emotion/styled';
import { Typography, Box, Accordion } from '@mui/material';
import BgImg from '../../assests/bg-dark2.jpg';

export const UserTitle = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontSize: '44px',
    color: white?.main,
    fontWeight: '500',
  })
);
export const UserRole = styled('h5')({
  margin: '0',
  color: '#eee',
  fontSize: '26px',
  fontWeight: '300',
  letterSpacing: '1.4px',
});
export const AboutDesc = styled('p')(
  ({
    theme: {
      palette: { white, darkGray },
    },
  }) => ({
    letterSpacing: '0.8px',
    fontSize: (props) => (props.fontSize === '36px' ? '36px' : '24px'),
    color: (props) => (props.color === white.main ? white.main : darkGray),
  })
);

export const MainBox = styled(Box)(
  ({
    theme: {
      palette: { white, primary, darkBlack },
    },
  }) => ({
    backgroundColor: white?.main,
    position: 'relative',
    paddingBottom: '40px',
    '& .MuiAccordion-root': {
      paddingBottom: '30px',
      paddingTop: '10px',
      '& .MuiAccordionSummary-root': {
        padding: '0',
      },
      '& .MuiAccordionSummary-expandIconWrapper ': {
        color: darkBlack?.main,
        '& svg': {},
      },
      '& .MuiAccordionSummary-content p': {
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
  })
);
export const StyledBox = styled(Box)(
  ({
    theme: {
      palette: { darkBlack },
    },
  }) => ({
    position: 'relative',
    padding: '100px 0px 100px 0px',
    backgroundImage: `url(${BgImg})`,
    objectFit: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    '&:before': {
      content: `' '`,
      backgroundColor: darkBlack?.main,
      opacity: '.6',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '1',
    },
  })
);
export const ContactDetailsBox = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    padding: '100px 0px 100px 0px',
    backgroundColor: primary?.main,
    display: 'flex',
    position: 'relative',
  })
);
export const DescriptionBox = styled(Box)({
  padding: '100px 0px 50px 0px',
  '.MuiBox-root': {
    marginTop: '30px',
    textAlign: 'center',
  },
});
export const UserImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 3px solid #fffff;
  object-fit: cover;
  z-index: 222;
`;
export const UserContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
export const UserData = styled.div`
  margin-left: 2rem;
  z-index: 222;
`;
export const Heading = styled('h4')({
  margin: '0',
  textTransform: 'uppercase',
  fontSize: '2rem',
  fontWeight: '600',
  lineHeight: '1.5',
  marginBottom: '15px',
  letterSpacing: '2px',
});
export const UserSocialIcons = styled('div')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      cursor: 'pointer',
      color: white?.main,
      fontSize: '34px',
    },
  })
);
export const CustomizeAccordion = styled(Accordion)({
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  svg: {
    fontSize: '2.5rem',
    paddingRight: '2rem',
  },
});

// Accordion Content
export const AccordionTitle = styled('h2')({
  padding: '0px 25px',
  fontSize: '22px',
  fontWeight: '600',
  letterSpacing: '1.2px',
});

// Accordion Content
export const AccordionContent = styled('p')({
  padding: '0px 8px',
});

// ProcessBar Title
export const ProgressWrapper = styled(Box)({
  textAlign: 'center',
});

// ProgressBar Container
export const ProgressContent = styled(Box)({
  marginTop: '60px',
});

// TimeLine Component
export const TimeLineWrap = styled(Box)({
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
