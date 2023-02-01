import React from 'react';
import { Container, Breadcrumbs, Typography, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { AboutHeading, MainBox, Details } from './styles';

const MainSection = ({ serviceName, teamName }) => {
  const location = useLocation();
  const name = serviceName ? serviceName : teamName ? teamName : location.pathname.replace('/', '');
  return (
    <MainBox>
      <Container>
        <AboutHeading>{name}</AboutHeading>
        <Details>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary"> {serviceName ? 'Services / ' + serviceName : name}</Typography>
          </Breadcrumbs>
        </Details>
      </Container>
    </MainBox>
  );
};

export default MainSection;
