import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            background: '#f54c0a',
            textTransform: 'none',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#fff',
            // backgroundColor: '#fff',
            textTransform: 'none',
            borderColor: '#fff',
            '&:hover': {
              borderColor: '#fff',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: '#444',
            '&:hover': {
              background: 'transparent',
              color: '#f15c27',
            },
          },
        },
        {
          props: { variant: 'dark' },
          style: {
            backgroundColor: '#323232',
            color: '#fff',
            padding: '15px 32px',
            letterSpacing: '1.3px',
            '&:hover': {
              background: '#11141b',
            },
          },
        },
        {
          props: { variant: 'dark-version' },
          style: {
            backgroundColor: 'transparent',
            padding: '5px 12px',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontSize: '13px',
            fontWeight: '200',
            paddingLeft: '10px !important',
            transition: '.4s all ease',
            '&:hover': {
              color: '#f54c0a',
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#f15c27',
    },
    secondary: {
      main: '#edf2ff',
    },
    white: {
      main: '#fff',
    },
    lightGray: {
      main: '#748494',
      100: '#363636',
    },
    darkGray: {
      main: '#444',
    },
    mediumGray: {
      main: '#d6d6d7',
    },
    black: {
      main: '#000000',
    },
    lightnessWhite: {
      main: '#F6F6F6',
    },
    gray93: {
      main: '#ededed',
    },
    darkBlack: {
      main: '#0c0f16',
    },
    very_black: {
      main: '#11141b',
    },
    dark_black: {
      main: '#0c0f16',
    },
    hover_color: {
      main: '#4d4d4d',
    },
  },
});
export default theme;
