import styled from '@emotion/styled';

const Section = styled('section')(({ variant, theme: { palette } }) => ({
  height: 'auto',
  padding: '60px 0',
  background: palette[variant]?.main,
}));

export default Section;
