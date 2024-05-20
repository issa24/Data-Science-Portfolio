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

const NotebookProject = () => (
  <Container>
    <Helmet>
      <title>Leceister City PL Trophy Season - Data Science Portfolio</title>
    </Helmet>
    <h1>Leceister City PL Trophy Season</h1>
    <iframe src={`${process.env.PUBLIC_URL}/LeceisterCityPLTrophySeason.html`} title="Leceister City PL Trophy Season"></iframe>
  </Container>
);

export default NotebookProject;
