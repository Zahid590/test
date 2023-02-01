import { InputBase, Paper } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Button from '../Button';
const Wrapper = styled(Paper)(
  ({
    theme: {
      palette: { very_black },
    },
  }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    borderRadius: '4px',
    '& input': {
      border: '1px solid #aaaaaa69',
      height: '44px',
      width: '100%',
      paddingRight: '10rem',
      paddingLeft: '1rem',
      transition: '.4s all ease',
      boxSizing: 'border-box',
      '&:hover': {
        borderColor: '#11141ba1',
      },
      '&:focus': { borderColor: very_black.main },
    },
  })
);
// text wrapper
export const TextWrapper = styled(Box)({});
export const Label = styled('h3')({
  color: '#11141bbf',
  fontWeight: '400',
  letterSpacing: '1.2px',
  fontSize: '17px',
  textAlign: 'left',
  marginTop: '0',
});
export const CustomButton = styled(Button)({
  right: '0',
  borderRadius: '0 4px 4px 0 !important',
  fontSize: '16px',
  transition: '.6s all ease',
  height: '44px',
});
export const NewsWrapper = styled(`div`)(() => ({
  width: ' 100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}));
export const News = styled(`div`)(() => ({}));
export const Input = styled(InputBase)(() => ({
  minWidth: '200px',
}));
export default Wrapper;
