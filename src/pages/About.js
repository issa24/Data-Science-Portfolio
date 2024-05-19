import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer>
    <Title>About Me</Title>
    <Paragraph>
      Hello! I am a dedicated and passionate Data Analyst/Scientist with over three years of experience in the industry. Currently, I am working at Boeing, where I specialize in analyzing complex datasets to drive strategic decision-making and improve operational efficiency.
    </Paragraph>
    <Paragraph>
      I have a strong background in statistical analysis, machine learning, and data visualization. My expertise includes Python, R, SQL, and various data visualization tools like Tableau and Power BI. I have successfully led multiple projects that have resulted in significant cost savings and performance improvements.
    </Paragraph>
    <Paragraph>
      My journey in data science began with a Bachelor's degree in Computer Science, followed by a Master's degree in Data Science. I am continuously learning and staying up-to-date with the latest trends and technologies in the field.
    </Paragraph>
    <Paragraph>
      At Boeing, I am part of a dynamic team where we tackle challenging problems and innovate solutions that contribute to the company's success. I am passionate about leveraging data to make informed decisions and am always eager to take on new challenges that push the boundaries of what is possible with data.
    </Paragraph>
  </AboutContainer>
);

export default About;
