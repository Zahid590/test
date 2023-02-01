import React from 'react';
import Facebook from '../Svgs/Facebook';
import LinkedIn from '../Svgs/Linkedin';
import Mail from '../Svgs/Mail';
import {
  Image,
  ImageWrapper,
  ProfileWrapper,
  UserName,
  UserRole,
  UserDetails,
  DetailsWrapper,
  ProfileContentWrapper,
  IconsWrapper,
  IconBorder,
} from './styles';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userImg, userName, userRole, userDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/contact/${userName}`, {
      state: {
        userName: userName,
        userImg: userImg,
        userRole: userRole,
        userDetails: userDetails,
      },
    });
  };
  return (
    <ProfileWrapper onClick={handleClick}>
      <ImageWrapper>
        <Image src={userImg} alt={userName} />
      </ImageWrapper>
      <ProfileContentWrapper>
        <UserRole>{userRole}</UserRole>
        <UserName>{userName}</UserName>
        <DetailsWrapper>
          <UserDetails>{userDetails}</UserDetails>
        </DetailsWrapper>
        <IconsWrapper>
          <IconBorder>
            <Facebook className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <LinkedIn className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <Mail className="socialIcon" color="#fff" />
          </IconBorder>
        </IconsWrapper>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
