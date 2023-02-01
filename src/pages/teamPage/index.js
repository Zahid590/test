import React from 'react';

import { MainBox, ServicesItemWrapper, Item } from './styles';
import MainSection from '../../components/layout/mainSection';
import { Description, MainWrapper } from '../../components/common';
import { Container, Grid } from '@mui/material';
import ServicesItem from '../../components/serviceItems';
import Contact from '../../components/contactForm';
import ProfileCard from '../../components/ProfileCard';
import { useLocation } from 'react-router-dom';

const TeamPage = () => {
  const { state } = useLocation();
  return (
    <MainBox>
      <MainSection teamName={state.teamName} />
      <MainWrapper>
        <Container>
          <Grid container spacing={[4]}>
            {state.teamData.map((item, key) => (
              <Grid item xs={12} sm={4} md={4} key={`data ${key}`}>
                <Item>
                  <ProfileCard
                    userImg={item.img}
                    userName={item.name}
                    userRole={item.role}
                    userDetails={item.userDetails}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
          <ServicesItemWrapper>
            <Description>Our Teams</Description>
            {state.data.map((item, key) => (
              <div key={`data-${key}`}>
                <ServicesItem teamName={item.title} teamData={item.data} data={state.data} />
              </div>
            ))}
          </ServicesItemWrapper>
        </Container>
      </MainWrapper>
      <MainWrapper>
        <Contact />
      </MainWrapper>
    </MainBox>
  );
};

export default TeamPage;
