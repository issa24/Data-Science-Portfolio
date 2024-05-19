import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Technologies = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => (
  <Card>
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <Technologies>Technologies: {project.technologies.join(', ')}</Technologies>
    <Link href={project.link}>View Project</Link>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
