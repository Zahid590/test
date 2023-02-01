import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});

export const SeeMore = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
export const SponsorsWrapper = styled(Box)(
  ({
    theme: {
      palette: { primary, gradient },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media(max-width: 992px)': {
      '.sponsor_heading': {
        alignItems: 'center',
      },
    },
  })
);

export const CustomizeSlide = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    '.slick-next': {
      padding: '1rem',
      right: '30px',
      borderRadius: '50%',
      transition: '.3s ease-in',
      fontSize: '15px',
      border: '1px solid #ffffff80',
      color: '#ffffff80',
      '&:hover': {
        color: primary?.main,
        borderColor: primary?.main,
      },
    },
    '.slick-prev': {
      padding: '1rem',
      left: '30px',
      fontSize: '15px',
      color: '#ffffff80',
      border: '1px solid #ffffff80',
      borderRadius: '50%',
      zIndex: ' 1',
      transition: '.2s ease',
      '&:hover': {
        color: primary?.main,
        borderColor: primary?.main,
      },
    },
  })
);

export const SlideWrapper = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    '.slick-dots': {
      position: 'unset',
    },
    '.slick-dots li ': {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      border: '1px solid #eee',
      marginTop: '20px',
      '&.slick-active': {
        background: '#eee',
      },
    },

    '.slick-dots li button': {
      '&.slick-active': {
        color: '#fff',
        backgroundColor: '#fff',
      },
      '&::before': {
        color: 'transparent',
      },
    },
    textAlign: 'center',
    backgroundColor: '#11141b',
    color: '#fff',
    '.slick-next': {
      padding: '1rem',
      right: '20px',
      top: '30%',
      fontSize: '15px',
      backgroundColor: 'none',
      color: '#ffffff80',
      borderRadius: '50%',
      transition: '.3s ease-in',
      border: '1px solid #ffffff80',
      '&:hover': {
        color: primary?.main,
        borderColor: primary?.main,
      },
    },
    '.slick-prev': {
      padding: '1rem',
      left: '20px',
      top: '30%',
      color: '#ffffff80',
      border: '1px solid #ffffff80',
      fontSize: '15px',
      borderRadius: '50%',
      zIndex: ' 1',
      transition: '.2s ease',
      '&:hover': {
        color: primary?.main,
        borderColor: primary?.main,
      },
    },
  })
);

// blogs wrapper styles
export const BlogsWrapper = styled(Box)({
  marginTop: '70px',
});

export const SponsorWrapper = styled(Box)({});
