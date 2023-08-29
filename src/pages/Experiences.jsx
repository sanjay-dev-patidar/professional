// src/pages/Experiences.jsx
import React from 'react';
import styled from 'styled-components';

const ExperiencesContainer = styled.div`
  padding: 2rem;
`;

const ExperienceCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: #777;
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  line-height: 1.6;
`;

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <ExperienceCard>
        <ExperienceTitle>Software Developer at XYZ Company</ExperienceTitle>
        <ExperienceDate>Jan 2020 - Present</ExperienceDate>
        <ExperienceDescription>
          Responsible for developing and maintaining web applications using React and Node.js.
        </ExperienceDescription>
      </ExperienceCard>
      {/* Add more experience cards */}
    </ExperiencesContainer>
  );
};

export default Experiences;
