import React from 'react';

import { Typography, Box } from '@mui/material';
import StyledProgress from './styles';
import { Label, CustomizeCircularProgress, ProgressWrap, CustomizeLinearProgress, LinearWrap, Percent } from './styles';

export const CircularProgress = ({ label, percentage, size, thickness, ...rest }) => {
  return (
    <StyledProgress>
      <ProgressWrap>
        <CustomizeCircularProgress
          variant="determinate"
          value={percentage}
          size={size}
          thickness={thickness}
          {...rest}
        />
        <Percent component="span">{`${percentage}%`}</Percent>
      </ProgressWrap>
      <Label>{label}</Label>
    </StyledProgress>
  );
};

export const LinearProgress = ({ label, percentage, ...rest }) => {
  return (
    <LinearWrap>
      <Label>{label}</Label>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <CustomizeLinearProgress variant="determinate" value={percentage} valueBuffer={percentage} {...rest} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(percentage)}%`}</Typography>
        </Box>
      </Box>
    </LinearWrap>
  );
};
