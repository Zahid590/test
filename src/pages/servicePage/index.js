import React from 'react';
import { MainBox, ServicesItemWrapper, ServicesImageWrapper } from './styles';
import MainSection from '../../components/layout/mainSection';
import { Heading, Description, MainWrapper } from '../../components/common';
import { Container, Grid } from '@mui/material';
import ServicesItem from '../../components/serviceItems';
import Contact from '../../components/contactForm';
import Image from '../../assests/guide.jpg';
import { useLocation } from 'react-router-dom';

const ServicePage = () => {
  const { state } = useLocation();
  const data = [
    {
      servicesName: 'Web development',
    },
    {
      servicesName: 'Digital Marketing',
    },
    {
      servicesName: 'Marketing Research',
    },
    {
      servicesName: 'finance',
    },
  ];
  return (
    <MainBox>
      <MainSection serviceName={state.serviceName} />
      <MainWrapper>
        <Container>
          <Grid container spacing={[8]}>
            <Grid item xs={12} sm={6} md={8}>
              <Heading variant="h3">Business Growth Management</Heading>
              <Description>
                Continually myocardinate holistic mindshare with client-based web services. Assertively e-enable
                catalysts for change before tested markets. intermandated applications. Conveniently predominate
                revolutionary quality vectors through future-proof manufactured products. Enthusiastically transform
                distinctive collaboration
                <br /><br/>
                Phosfluorescently maintain wireless scenarios after intermandated applications. Conveniently predominate
                revolutionary quality vectors through future-proof manufactured products. Enthusiastically transform
                distinctive collaboration.
              </Description>
              <ServicesImageWrapper>
                <img src={Image} alt="" />
                <Description>
                  Myocardinate holistic mindshare with client-based web services. Assertively e-enable
                  catalysts for change before tested markets revolutionary. <br/> Phosfluorescently maintain wireless scenarios after
                  intermandated applications. Conveniently predominate revolutionary quality vectors through
                  future-proof manufactured products. Enthusiastically transform distinctive collaboration.
                </Description>
              </ServicesImageWrapper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServicesItemWrapper>
                <Description weight="bold">Our Services</Description>
                {data.map((item, key) => (
                  <div key={`data-${key}`}>
                    <ServicesItem serviceName={item.servicesName} />
                  </div>
                ))}
              </ServicesItemWrapper>
            </Grid>
          </Grid>
        </Container>
      </MainWrapper>
      <MainWrapper>
        <Contact />
      </MainWrapper>
    </MainBox>
  );
};

export default ServicePage;
