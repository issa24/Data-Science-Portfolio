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

const RegressionProject = () => (
  <Container>
    <Helmet>
      <title>Predictive Analysis Using Regression - Data Science Portfolio</title>
    </Helmet>
    <h1>Predictive Analysis Using Regression</h1>
    <iframe src={`${process.env.PUBLIC_URL}/Predictive_Analysis_Using_Regression.html`} title="Predictive Analysis Using Regression"></iframe>
  </Container>
);

export default RegressionProject;
