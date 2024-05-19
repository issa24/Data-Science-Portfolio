import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: left;

  iframe {
    width: 100%;
    height: 80vh;
    border: none;
  }
`;

const HTMLProject = () => (
  <Container>
    <Helmet>
      <title>Exploratory Data Analysis with R - Data Science Portfolio</title>
    </Helmet>
    <h1>Exploratory Data Analysis with R</h1>
    <iframe src="/ExpodatawithR.html" title="Exploratory Data Analysis with R"></iframe>
  </Container>
);

export default HTMLProject;
