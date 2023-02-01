import { Container } from '@mui/system';
import React from 'react';
import MainSection from '../../components/layout/mainSection';
import { DepartmentHeading, Item, TeamMembersWrapper, Description } from './styles';
import ProfileCard from '../../components/ProfileCard';
import { Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { teamMembers } from './data';
import { useNavigate } from 'react-router-dom';

const AllTeams = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/team/${e.title}`, {
      state: {
        teamName: e.title,
        teamData: e.data,
        data: teamMembers,
      },
    });
  };
  return (
    <>
      <MainSection />
      <Container>
        {teamMembers.map((items, key) => (
          <div key={`members ${key}`}>
            <TeamMembersWrapper>
              <DepartmentHeading>{items.title}</DepartmentHeading>
              <Description onClick={() => handleClick(items)}>
                {' '}
                View all <ArrowForwardIcon />
              </Description>
            </TeamMembersWrapper>
            <Grid container spacing={[4]}>
              {items.data.slice(0, 3).map((item, key) => (
                <Grid item xs={12} sm={4} md={4} key={`data ${key}`}>
                  <Item>
                    <ProfileCard
                      userImg={item.img}
                      userName={item.name}
                      userRole={item.role}
                      userDetails={item.userDetails}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </>
  );
};

export default AllTeams;
