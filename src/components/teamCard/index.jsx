import React from "react";
import {
  Image,
  ImageWrapper,
  TeamCardWrapper,
  UserName,
  UserRole,
  UserDetails,
  DetailsWrapper,
  TeamCardContentWrapper,
} from "./styles";

const TeamCard = ({ userImg, userName, userRole, userDetails }) => {
  return (
    <TeamCardWrapper>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <TeamCardContentWrapper>
        <UserName>{userName}</UserName>
        <UserRole>{userRole}</UserRole>
        <DetailsWrapper>
          <UserDetails>{userDetails}</UserDetails>
        </DetailsWrapper>
      </TeamCardContentWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;
