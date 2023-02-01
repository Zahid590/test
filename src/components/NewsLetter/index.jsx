import React from 'react';
import Wrapper, { CustomButton, Input, Label, News, NewsWrapper, TextWrapper } from './styles';

const NewsLetter = () => {
  return (
    <NewsWrapper>
      <News>
        <TextWrapper>
          <Label>Subscribe to get updates directly.</Label>
        </TextWrapper>
        <Wrapper component="form">
          <Input placeholder="Your Email" />
          <CustomButton size="lg" variant="dark">
            Subscribe
          </CustomButton>
        </Wrapper>
      </News>
    </NewsWrapper>
  );
};

export default NewsLetter;
