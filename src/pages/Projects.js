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
      title: 'Telecom Churn Analysis',
      description: 'A comprehensive analysis of customer churn in the telecom industry using Tableau.',
      technologies: ['Tableau', 'Data Visualization'],
      link: 'https://public.tableau.com/app/profile/issa.abdulkadir/viz/Telecom-churn_analysis/TelecomChurnDashboard'
    },
    {
      title: 'Telecom International Calls Dashboard',
      description: 'An analysis of international call patterns in the telecom industry using Tableau.',
      technologies: ['Tableau', 'Data Visualization'],
      link: 'https://public.tableau.com/app/profile/issa.abdulkadir/viz/D211_16771227684550/TelecomInternationalCallsDashboard'
    },
    {
      title: 'Exponential Data Analysis with R',
      description: 'An analysis using R for exponential data.',
      technologies: ['R', 'HTML'],
      link: '/html-project'
    },
    {
      title: 'Leceister City PL Trophy Season',
      description: 'An in-depth analysis of Leceister City\'s Premier League trophy-winning season.',
      technologies: ['Python', 'Jupyter Notebook'],
      link: '/notebook-project'
    },
    {
      title: 'Predictive Analysis Using Regression',
      description: 'Predicting customer churn for a telecom company using regression analysis.',
      technologies: ['Python', 'Jupyter Notebook'],
      link: '/regression-project'
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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
