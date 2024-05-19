import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet';
import animationData from '../animations/data-science-animation.json';

const HomeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 80px);
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AnimationWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <HomeContainer>
      <Helmet>
        <title>Home - Data Science Portfolio</title>
      </Helmet>
      <Title>Welcome to My Data Science Portfolio</Title>
      <AnimationWrapper>
        <Lottie options={defaultOptions} />
      </AnimationWrapper>
      <Description>
        Discover my projects and skills in data science.
      </Description>
    </HomeContainer>
  );
};

export default Home;
