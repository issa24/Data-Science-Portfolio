import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Lottie from 'react-lottie';
import animationData from '../animations/data-science-animation.json';
import { FaPython, FaRProject, FaChartBar, FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
  background: linear-gradient(135deg, #f4f4f9, #e0eafc);
  padding: 2rem;
`;

const HeroSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background: adb5bd ;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const AnimationWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  font-size: 2rem;
  color: #555;
`;

const CallToAction = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin: 0.5rem;
  }
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

const Footer = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  background-color: #282c34;
  color: white;
  width: 100%;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;

  a {
    color: white;
    margin: 0 0.5rem;

    &:hover {
      color: #61dafb;
    }
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
      <HeroSection>
        <Title>Welcome to My Data Science Portfolio</Title>
        <Subtitle>Issa Abdulkadir - Data Analyst/Scientist</Subtitle>
        <Description>
          Discover my projects, skills, and experience in data science. Transforming complex data into actionable insights.
        </Description>
        <AnimationWrapper>
          <Lottie options={defaultOptions} />
        </AnimationWrapper>
        <Skills>
          <Skill>
            <FaPython />
            <span>Python</span>
          </Skill>
          <Skill>
            <FaRProject />
            <span>R</span>
          </Skill>
          <Skill>
            <FaChartBar />
            <span>Tableau</span>
          </Skill>
        </Skills>
        <CallToAction>
          <Button href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} target="_blank" rel="noopener noreferrer">
            View Resume
          </Button>
          <Button href="#/projects">View Projects</Button>
        </CallToAction>
      </HeroSection>
      <Footer>
        <p>Connect with me:</p>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/issa-abdulkadir-9658b543/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/issa24" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialIcons>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
