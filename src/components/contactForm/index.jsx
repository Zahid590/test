import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  ContactWrapper,
  FormWrapper,
  InputWrapper,
  StyledInput,
  StyledTextArea,
  ContactDetails,
  ContactItem,
  IconsWrapper,
  Title,
  SubTitle,
  Text,
  ContactButton,
  IconBorder,
} from './styles';
import SendIcon from '@mui/icons-material/Send';
import { MainWrapper } from '../../components/common';
import { useLocation } from 'react-router-dom';
import Heading from '../Heading';
import Section from '../Section';
// social icons
import Facebook from '../../components/Svgs/Facebook';
import LinkedIn from '../Svgs/Linkedin';
import Twitter from '../Svgs/Twitter';
import Mail from '../Svgs/Mail';

const ContactForm = () => {
  const location = useLocation();
  const contactDetails = [
    {
      label: 'contact@calibreoninternational.com',
    },
    {
      label: '(647) 749-7224',
    },
  ];
  const visit = [
    {
      label: 'Near Heli Chowk Zulfiqarabad Gilgit',
    },
  ];
  return (
    <Section variant={'dark_black'}>
      <Container>
        {location.pathname === '/contact' ? null : (
          <>
            <Heading
              variant="h2"
              color={'primary'}
              align="center"
              subTitle="Get in touch"
              title="contact us."
            ></Heading>
          </>
        )}
        <MainWrapper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FormWrapper>
                <Title variant="h4">Get in touch.</Title>
                <InputWrapper>
                  <StyledInput placeholder="Name" className="colorChanged" />
                  <StyledInput placeholder="Email Adress" />
                  <StyledTextArea aria-label="Hello" placeholder="Message" minRows={5} />
                </InputWrapper>
                <ContactButton variant="outlined">
                  Send Message <SendIcon className="ml-2" fontSize="small" />
                </ContactButton>
              </FormWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactWrapper>
                <Title variant="h4">Contact Info.</Title>
                <ContactDetails>
                  <SubTitle>Let's talk</SubTitle>
                  {contactDetails.map(({ label }, index) => (
                    <ContactItem key={`contact-${index}`}>
                      <Text color={'primary'} title="details">
                        {label}
                      </Text>
                    </ContactItem>
                  ))}
                  <SubTitle>Meet us</SubTitle>
                  {visit.map(({ label }, index) => (
                    <ContactItem key={`contact-${index}`}>
                      <Text color={'primary'} title="details">
                        {label}
                      </Text>
                    </ContactItem>
                  ))}
                </ContactDetails>
                <IconsWrapper>
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
                </IconsWrapper>
              </ContactWrapper>
            </Grid>
          </Grid>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default ContactForm;
