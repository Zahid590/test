import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import React from 'react';
import { StyledTimeLine, Content, Name, Title, Date, StyledSeparator, StyledContent } from './styles';
import { TimelineConnector, TimelineDot } from '@mui/lab';

const TimeLineComponent = () => {
  const timeLineData = [
    {
      title: 'Experience',
      date: '2013 - Present',
      name: 'Art Director - Facebook Inc.',
      content: 'Collaborate with creative and development teams on the execution of ideas.',
      id: '1',
      main: 'staticColor',
    },
    {
      title: 'Education',
      date: '2012 - Past',
      name: 'Art Director - Facebook Inc.',
      content: 'Collaborate with creative and development teams on the execution of ideas.',
      id: '2',
    },
    {
      title: 'Studies',
      date: '2011 - Past',
      name: 'Art Director - Facebook Inc.',
      content: 'Collaborate with creative and development teams on the execution of ideas.',
      id: '3',
    },
  ];

  return (
    <StyledTimeLine>
      <Timeline position="alternate">
        {timeLineData.map((item, id) => (
          <TimelineItem key={id}>
            <StyledSeparator>
              <TimelineDot color={`${item.main === 'staticColor' ? 'warning' : 'grey'}`} />
              <TimelineConnector />
            </StyledSeparator>
            <StyledContent>
              <Title>{item.title}</Title>
              <Date>{item.date}</Date>
              <Name>{item.name}</Name>
              <Content>{item.content}</Content>
            </StyledContent>
          </TimelineItem>
        ))}
      </Timeline>
    </StyledTimeLine>
  );
};

export default TimeLineComponent;
