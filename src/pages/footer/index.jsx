import React from 'react';
import { Box, Container } from '@mui/material';
import FooterItem from './footerItem';

import {
  StyledGrid,
  DesignedBy,
  Item,
  AddressWrapper,
  LinksWrapper,
  MenuLinks,
  Address,
  Contact,
  IconsWrapper,
} from './styles';
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'About us',
      path: '/about',
    },
    {
      name: 'Team',
      path: '/',
    },
  ];
  return (
    <Box>
      <Container>
        <StyledGrid container spacing={2}>
          <StyledGrid item xs={12} md={4}>
            <Item>
              <FooterItem title={'Menu'}>
                <LinksWrapper>
                  {routes.map((item) => {
                    return (
                      <MenuLinks href={item.path} key={`route-${item.name}`}>
                        {item.name}
                      </MenuLinks>
                    );
                  })}
                </LinksWrapper>
              </FooterItem>
            </Item>
          </StyledGrid>
          <StyledGrid item xs={12} md={4}>
            <Item>
              <FooterItem title={'Contact'}>
                <AddressWrapper>
                  <Address>
                    Near Heli Chowk <br /> Zulfiqarabad <br /> Gilgit, 15100
                  </Address>
                  <Contact>
                    contact@calibreoninternational.com <br />
                    (647) 749-7224
                  </Contact>
                </AddressWrapper>
              </FooterItem>
            </Item>
          </StyledGrid>
          <StyledGrid item xs={12} md={4}>
            <Item>
              <FooterItem title={'About'}>
                <AddressWrapper>
                  <Address>
                    Fint Cloud uses technology to streamline your accounting, save you time and money, and help you grow
                    your business.
                  </Address>
                </AddressWrapper>
                <IconsWrapper>
                  <Facebook />
                  <LinkedIn />
                  <Twitter />
                  <Instagram />
                </IconsWrapper>
              </FooterItem>
            </Item>
          </StyledGrid>
        </StyledGrid>
      </Container>
      <DesignedBy>© 2022 CALIBREON INTERNATIONAL PVT. LTD. ALL RIGHTS RESERVED. DESIGNED BY NORTHSPEX</DesignedBy>
    </Box>
  );
};

export default Footer;
