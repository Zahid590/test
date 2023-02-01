import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Toolbar, useScrollTrigger, Fab, Fade } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from './pages/footer';
import '@fontsource/poppins';
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PersonalProfile from './pages/personalProfile';
import Services from './pages/services';
import ServicePage from './pages/servicePage';
import AllTeams from './pages/allTeam';
import TeamPage from './pages/teamPage';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
    '.MuiSvgIcon-root .MuiSvgIcon-fontSizeMedium .css-i4bv87-MuiSvgIcon-root': {
      display: 'none',
    },
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 46 }}>
        {children}
      </Box>
    </Fade>
  );
}
function App(props) {
  return (
    <div className="App">
      <ElevationScroll {...props}>
        <Header />
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home/contact/:name" element={<PersonalProfile />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/:name" element={<ServicePage />}></Route>
        <Route path="/team" element={<AllTeams />}></Route>
        <Route path="/team/:name" element={<TeamPage />}></Route>
      </Routes>
      <ScrollTop {...props}>
        <Fab size="small" sx={{}} aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;
