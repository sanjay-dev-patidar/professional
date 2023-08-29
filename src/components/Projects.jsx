import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const ProjectsNavigation = styled.nav`
  margin-bottom: 2rem;
`;

const ProjectsNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap; /* Add flex-wrap property for responsive wrapping */
  gap: 1rem;
`;

const ProjectsNavItem = styled.li`
  flex: 1; /* Distribute available space evenly */
`;

const ProjectsNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #ff6b6b;
  }
`;

const ProjectsContent = styled.div`
  background-color: #f7f7f7;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1rem;
`;

const Projects = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(`/api/projects/${category}`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, [category]);

  return (
    <ProjectsContainer>
      <ProjectsNavigation>
        <ProjectsNavList>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/all">All Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/web">Web Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/mobile">Mobile Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/other">Other Projects</ProjectsNavLink>
          </ProjectsNavItem>
        </ProjectsNavList>
      </ProjectsNavigation>
      <ProjectsContent>
        {projects.length > 0 ? (
          <ProjectList>
            {projects.map((project) => (
              <ProjectItem key={project._id}>
                <NavLink to={`/project/${project._id}`}>{project.title}</NavLink>
                <p>{project.description}</p>
              </ProjectItem>
            ))}
          </ProjectList>
        ) : (
          <p>No projects found.</p>
        )}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
