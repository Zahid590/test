import React from 'react';
import Mission from '../../components/mission';
import MainSection from '../../components/layout/mainSection';
import Contact from '../../components/contactForm';

import { MainBox } from './styles';

const About = () => {
  return (
    <MainBox>
      <MainSection />
      <Mission />
      <Contact />
    </MainBox>
  );
};

export default About;
