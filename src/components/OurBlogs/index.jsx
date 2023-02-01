import React from 'react';
import Button from '../Button';
import Wrapper, {
  Img,
  Information,
  TextWrapper,
  Title,
  SubTitle,
  Details,
  ButtonWrapper,
  Badge,
  BadgeWrapper,
  Date,
  Month,
} from './styles';

const OurBlogs = ({ profile, title, subTitle, details, date, month, btnValue, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Img>
        <img src={profile} alt="Blog-A" />
      </Img>
      <TextWrapper>
        <Information>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Information>
        <Details>{details}</Details>
        <BadgeWrapper>
          <Badge>
            <Date>{date}</Date>
            <Month>{month}</Month>
          </Badge>
        </BadgeWrapper>
      </TextWrapper>
      <ButtonWrapper>
        <Button variant="dark-version">{btnValue}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default OurBlogs;
