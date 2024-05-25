import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  text-align: center;

  iframe {
    width: 100%;
    height: 600px;
    border: none;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SPLAnalysis = () => (
  <Container>
    <Helmet>
      <title>Seattle Public Library Checkout Analysis - Data Science Portfolio</title>
    </Helmet>
    <Title>Seattle Public Library Checkout Analysis</Title>
    <iframe src={`${process.env.PUBLIC_URL}/SPL_Analysis.html`} title="Seattle Public Library Checkout Analysis"></iframe>
  </Container>
);

export default SPLAnalysis;
