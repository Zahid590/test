import { Grid } from '@mui/material';
import React from 'react';
import Wrapper, { ImageWrapper, Img1, Img2, Img3, Details, Title, Paragraph } from './styles';

const AboutUs = ({ img1, img2, img3, title, details, ...rest }) => {
  return (
    <Wrapper>
      <Grid container spacing={4} {...rest}>
        <Grid item md={5} sm={8} xs={12}>
          <ImageWrapper>
            <Img1>
              <img src={img1} alt="About A" />
            </Img1>
            <Img2>
              <img src={img2} alt="About B" />
            </Img2>
            <Img3>
              <img src={img3} alt="About C" />
            </Img3>
          </ImageWrapper>
        </Grid>
        <Grid item md={7}>
          <Details>
            <Title>{title}</Title>
            <Paragraph>
              anibh.WeareAVO We create award winning websites,remarkable brand and cutting edge apps.Null am imperdiet.
            </Paragraph>
            <Paragraph>{details}</Paragraph>
          </Details>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutUs;
