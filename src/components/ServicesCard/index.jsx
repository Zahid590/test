import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Image,
  ImageWrapper,
  ServicesWrapper,
  UserName,
  ServicesDetails,
  DetailsWrapper,
  ServicesContentWrapper,
} from './styles';

const ServicesCard = ({ serviceImg, serviceName, serviceDetails, active }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/services/${serviceName}`, {
      state: {
        serviceName: serviceName,
        serviceImg: serviceImg,
        serviceDetails: serviceDetails,
      },
    });
  };
  return (
    <ServicesWrapper active={active} onClick={handleClick}>
      <ImageWrapper>
        <Image src={serviceImg} alt={serviceName} />
      </ImageWrapper>
      <ServicesContentWrapper>
        <UserName>{serviceName}</UserName>
        <DetailsWrapper>
          <ServicesDetails>{serviceDetails}</ServicesDetails>
        </DetailsWrapper>
      </ServicesContentWrapper>
    </ServicesWrapper>
  );
};

export default ServicesCard;
