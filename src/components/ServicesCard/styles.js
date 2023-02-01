import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  margin-top: 20px;
  display: inline-block;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const ServicesDetails = styled('p')(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '14px',
    padding: '0 20px',
    marginTop: '11px 0 0 0',
    color: lightGray?.main,
    display: 'flex',
    alignItems: 'center',
  })
);

export const UserName = styled.h4`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2;
  margin: 12px 0 0 0;
`;
export const ServicesWrapper = styled('div')(({ active }) => ({
  background: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'auto',
  alignItems: 'center',
  padding: '0 20px',
  position: 'relative',
  boxShadow: active ? 'rgba(17, 17, 26, 0.1) 0px 0px 16px' : ' ',
  transition: '0.3s all ease-in',
  border: '1px solid #e5e5e5',
  // '&:hover': {
  //   boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
  // },
  // '&:hover img': {
  //   transform: 'scale(1.1)',
  // },
}));

export const Image = styled('img')({
  height: '50px',
  maxWidth: '100%',
  transitionDuration: '0.3s',
});
export const DetailsSection = styled('div')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    position: 'absolute',
    cursor: 'pointer',
    bottom: '0',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s all ease',
    '& svg': {
      color: primary?.main,
      marginLeft: '.5rem',
      transition: '0.3s all ease',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: primary?.main,
      '.text': {
        color: primary?.main,
        fontWeight: 'bold',
      },
      svg: {
        transform: 'translate(10px)',
      },
    },
  })
);
export const ServicesContentWrapper = styled('div')({
  position: 'relative',
});
