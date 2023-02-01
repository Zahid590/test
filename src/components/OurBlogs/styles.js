import { styled } from '@mui/styles';
import { Box } from '@mui/system';

const Wrapper = styled(Box)(
  ({
    theme: {
      palette: { dark_black },
    },
  }) => ({
    background: dark_black?.main,
    color: '#fff',
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  })
);

export const Img = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '250px',
  '& img': {
    borderRadius: '5px',
    width: '100%',
    objectFit: 'cover',
    height: '100%',
  },
}));
export const TextWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '20px',
}));
export const Information = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '20px',
}));
export const Title = styled('h4')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    textTransform: 'uppercase',
    margin: '0',
    fontWeight: '400',
    fontSize: '15px',
    marginRight: '25px',
    color: white?.main,
  })
);
export const SubTitle = styled('a')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    textDecoration: 'none',
    fontSize: '16px',
    color: primary?.main,
  })
);
export const Details = styled('p')(({ theme }) => ({
  fontWeight: '200',
  fontSize: '17px',
  color: '#d5d5d5',
  letterSpacing: '1.3px',
  marginBottom: '6px',
}));
export const BadgeWrapper = styled(Box)({});
export const Badge = styled(Box)(
  ({
    theme: {
      palette: { hover_color, white },
    },
  }) => ({
    position: 'absolute',
    top: '-30px',
    right: '16px',
    padding: '5px 15px',
    background: white?.main,
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    zIndex: '2',
    boxShadow: '0px 0px 0px 3px rgb(255,255,255,.2)',
  })
);
export const Date = styled('h3')({
  margin: '0',
  marginBottom: '2px',
  color: 'black',
});
export const Month = styled('p')({
  textTransform: 'uppercase',
  margin: '0',
  letterSpacing: '1.1px',
  color: 'black',
});

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  padding: '10px',
  marginBottom: '12px',
}));

export default Wrapper;
