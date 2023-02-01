import styled from '@emotion/styled';
import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';

export const Navbar = styled(AppBar)({
  position: 'fixed',
  top: '0',
  width: '100%',
});

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 55px;
  }
`;
export const ToolbarBox = styled(Toolbar)(
  ({
    theme: {
      palette: { primary, darkGray },
    },
  }) => ({
    position: 'relative',
    '& .MuiBox-root .btn.MuiButtonBase-root.MuiButton-root': {
      margin: '0 10px',
    },

    '& .btn:hover': {
      color: primary?.main,
    },
    '.btn.MuiButtonBase-root.MuiButton-root.active': {
      borderBottom: `2px solid ${primary?.main}`,
      borderRadius: '0',
    },
    '.btn.MuiButtonBase-root.MuiButton-root.homeBtns': {
      fontWeight: '500',
      fontSize: '12px',
    },
  })
);

// btn wrapper styles

export const ButtonWrapper = styled(Box)({
  // border: '1px solid black',
});
