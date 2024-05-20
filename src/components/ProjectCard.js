import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFE0B2', '#D1C4E9', '#B2EBF2']; // Add more colors as needed

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
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
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

const ProjectCard = ({ project, index }) => (
  <Card bgColor={colors[index % colors.length]}>
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <Technologies>Technologies: {project.technologies.join(', ')}</Technologies>
    <Link href={project.link} target={project.link.startsWith('#') ? '_self' : '_blank'} rel={project.link.startsWith('#') ? '' : 'noopener noreferrer'}>
      View Project
    </Link>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
