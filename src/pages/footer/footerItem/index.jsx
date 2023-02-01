import { Box } from "@mui/material";
import React from "react";
import { Heading, HeadingWrapper, MenuLinksWraper } from "./styles";

const FooterItem = ({ title, menuLinks, children }) => {
  return (
    <Box>
      <HeadingWrapper>
        <Heading>{title}</Heading>
        <MenuLinksWraper>{menuLinks}</MenuLinksWraper>
      </HeadingWrapper>
      {children}
    </Box>
  );
};

export default FooterItem;
