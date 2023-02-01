import { styled } from '@mui/styles';
import { Box } from '@mui/system';

const Wrapper = styled(Box)({
  width: '100%',
  marginTop: '70px',
});
export const ImageWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});
export const Img1 = styled(Box)({
  width: '100%',
  position: 'relative',
  transform: 'scale(0.7) translateY(-50px)',

  margin: '0 auto',
  '& img': {
    width: '100%',
  },
});
export const Img2 = styled(Box)({
  width: '170px',
  position: 'absolute',
  bottom: '15%',
  left: '0',
  '& img': {
    width: '100%',
  },
});
export const Img3 = styled(Box)({
  width: '200px',
  position: 'absolute',
  bottom: 0,
  right: 0,
  '& img': {
    width: '100%',
    height: '100%',
  },
});
export const Details = styled(Box)({
  wordWrap: 'break-word',
});
export const Title = styled('h3')({
  margin: '0',
  color: '#fff',
  fontSize: '2rem',
  letterSpacing: '2px',
  fontWeight: '600',
  lineHeight: '1.5',
  marginBottom: '15px',
});
export const Paragraph = styled('p')({
  boxSizing: 'border-box',
  color: '#d5d5d5',
  fontSize: '1rem',
  fontWeight: '300',
  lineHeight: ' 2',
  padding: '0',
  letterSpacing: '1.3px',
});

export default Wrapper;
