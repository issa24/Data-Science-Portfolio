import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Resume = () => (
  <Container>
    <Helmet>
      <title>Resume - Data Science Portfolio</title>
    </Helmet>
    <Title>My Resume</Title>
    <Description>You can view or download my resume using the links below.</Description>
    <Button href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} target="_blank" rel="noopener noreferrer">
      View Resume
    </Button>
    <Button href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} download>
      Download Resume
    </Button>
  </Container>
);

export default Resume;
