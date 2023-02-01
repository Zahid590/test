import React from 'react';
import { Wrapper, Label, Img } from './styles';

const Sponsor = ({ url, image, label, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Label href={url} target="_blank" className="sponsor_url">
        {label}
      </Label>
      <Img className="sponsor_img" src={image} />
    </Wrapper>
  );
};

export default Sponsor;
