import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const NotFound = () => (
  <Container>
    <h1>Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/">Go to Homepage</Link>
  </Container>
);

export default NotFound;
