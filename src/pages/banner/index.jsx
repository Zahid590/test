import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  BannerMainWrapper,
  StyledTypo,
  ButtonWrapper,
  SlideContent,
  BannerWrapper,
  SocialIcons,
  CustomButton,
  IconBorder,
  WrapperDownIcon,
  BorderRadius,
} from './styles';
// social icons
import Facebook from '../../components/Svgs/Facebook';
import LinkedIn from '../../components/Svgs/Linkedin';
import Twitter from '../../components/Svgs/Twitter';
import Mail from '../../components/Svgs/Mail';
import DotIcon from '@mui/icons-material/FiberManualRecord';

const Banner = ({ key, item }) => {
  const navigate = useNavigate();
  let backgroundImg = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${item.imgLink})`,
    background: 'linear-gradient(rgba(0,0,0,0,0.6),rgba(0,0,0,0,0.3))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  const onClickServices = () => {
    navigate('/services');
  };
  return (
    <BannerMainWrapper style={backgroundImg} key={`slide-${key}`}>
      <Container>
        <BannerWrapper>
          <StyledTypo variant="h5">{item.title}</StyledTypo>
          <SlideContent>
            <Typography variant="body1"> {item.slideContent}</Typography>
          </SlideContent>
          <ButtonWrapper>
            {/* <CustomButton variant="outlined" onClick={onClickServices}>
              Explore More
            </CustomButton> */}
          </ButtonWrapper>
          <WrapperDownIcon>
            <BorderRadius>
              <DotIcon fontSize="small" />
            </BorderRadius>
          </WrapperDownIcon>
        </BannerWrapper>
        <SocialIcons>
          <IconBorder>
            <Facebook className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <LinkedIn className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <Twitter className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <Mail className="socialIcon" color="#fff" />
          </IconBorder>
        </SocialIcons>
      </Container>
    </BannerMainWrapper>
  );
};

export default Banner;
