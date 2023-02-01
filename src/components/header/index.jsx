import React, { useEffect } from 'react';
import { MenuItem, Menu, Box, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '../Button';
import { Navbar, LogoWrapper, ToolbarBox, ButtonWrapper } from './styles';
import Calibreon from './../../assests/logo-main.png';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Our Services', path: '/services' },
  { title: 'Team', path: '/team' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState('/');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const onClickLink = (e) => {
    navigate(e);
    setAnchorElNav(null);
  };
  const onClickContact = () => {
    navigate('/contact');
  };
  return (
    <Navbar sx={{ backgroundColor: '#fff', height: '76px', justifyContent: 'center' }}>
      <Container>
        <ToolbarBox>
          <LogoWrapper>
            <img src={Calibreon} alt="Calibreon" />
          </LogoWrapper>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', color: '#f54c0a' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={`page-${item.path}`} onClick={() => onClickLink(item.path)}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
            }}
          >
            {pages.map((item) => (
              <Button
                key={`page-${item.path}`}
                variant="text"
                onClick={() => onClickLink(item.path)}
                className={`btn ${item.path === active ? 'active' : 'homeBtns'}`}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <ButtonWrapper>
            <Button size="lg" variant="contained" onClick={onClickContact}>
              Contact Us
            </Button>
          </ButtonWrapper>
        </ToolbarBox>
      </Container>
    </Navbar>
  );
};
export default Header;
