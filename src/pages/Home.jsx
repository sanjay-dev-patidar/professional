import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import '../styles/Home.css';

import backgroundImage from '../assets/background.jpg';
import profileImage from '../assets/profile.png';

const HomeContainer = styled(motion.div)`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  margin-top: 1rem;
`;

const Introduction = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 600px;
  margin-top: 1.5rem;
`;

const ActionsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const ActionLink = styled(Link)`
  background-color: #2196f3;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #ff5722;
    transform: translateY(-3px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <ProfileImage
        src={profileImage}
        alt="Sanjay Patidar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <Title
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 120 }}
      >
        Welcome to My Portfolio
      </Title>
      <Introduction
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        Hi, I'm <span className="highlight">Sanjay Patidar</span>, a passionate developer and designer. 
        Here, you'll find information about my projects, skills,
        and experiences.
      </Introduction>
      <ActionsContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7 }}
      >
        <ActionLink to="/skills">
          <IconWrapper>
            <FaUserGraduate />
          </IconWrapper>
          Explore My Skills
        </ActionLink>
        <ActionLink to="/projects">
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          Discover My Projects
        </ActionLink>
        <ActionLink to="/experiences">
          <IconWrapper>
            <FaBriefcase />
          </IconWrapper>
          View My Experiences
        </ActionLink>
      </ActionsContainer>
    </HomeContainer>
  );
};

export default Home;
