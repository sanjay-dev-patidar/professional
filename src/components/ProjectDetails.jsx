import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProjectDetailsContainer = styled.div`
  padding: 2rem;
`;

const ProjectDetailsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectDetailsDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProjectDetails() {
      try {
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    }

    fetchProjectDetails();
  }, [id]);

  return (
    <ProjectDetailsContainer>
      {project ? (
        <>
          <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
          <ProjectDetailsDescription>{project.description}</ProjectDetailsDescription>
          <p>Additional project details: {project.additionalDetails}</p>
        </>
      ) : (
        <p>Loading project details...</p>
      )}
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails;
