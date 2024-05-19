import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      technologies: ['Python', 'Machine Learning'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      technologies: ['R', 'Data Visualization'],
      link: '#'
    }
  ];

  return (
    <ProjectsContainer>
      <Helmet>
        <title>Projects - Data Science Portfolio</title>
      </Helmet>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
