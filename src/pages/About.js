import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer>
    <Helmet>
      <title>About - Data Science Portfolio</title>
    </Helmet>
    <Title>About Me</Title>
    <Section>
      <Paragraph>
        <strong>Professional Data Analyst</strong>
      </Paragraph>
      <Paragraph>
        Welcome to my professional portfolio! I am Issa Abdulkadir, a dynamic and seasoned Data Analyst with a Master of Science in Data Analytics from Western Governors University. My expertise lies in transforming complex data sets into actionable insights and compelling data visualizations.
      </Paragraph>
    </Section>
    <Section>
      <Paragraph>
        <strong>Education & Skills</strong>
      </Paragraph>
      <Paragraph>
        I hold a Bachelor of Science in Data Management/Data Analytics and have honed my skills in various data analysis and visualization tools including SQL, Python, R, Tableau, and more. My technical proficiency extends to ETL processes, API development, data warehousing, and machine learning.
      </Paragraph>
    </Section>
    <Section>
      <Paragraph>
        <strong>Certifications & Expertise</strong>
      </Paragraph>
      <Paragraph>
        My commitment to continuous learning is evidenced by my certifications, including CompTIA Project+, ITIL Foundation, and advanced data modeling. I excel in data interpretation, statistical analysis, and data storytelling, which are critical in today's data-driven world.
      </Paragraph>
    </Section>
    <Section>
      <Paragraph>
        <strong>Professional Experience</strong>
      </Paragraph>
      <Paragraph>
        With experience at Boeing in Renton, I have led projects that significantly improved decision-making and operational efficiency. My role involved designing Tableau dashboards, automating data processes, and enhancing product quality through data analytics.
      </Paragraph>
    </Section>
    <Section>
      <Paragraph>
        <strong>Passion for Problem-Solving</strong>
      </Paragraph>
      <Paragraph>
        I am passionate about solving complex problems and have a proven track record of driving strategic business outcomes. Whether working as a team lead or developing web solutions as a freelancer, I bring a unique blend of technical skills and creative thinking to every challenge.
      </Paragraph>
    </Section>
    <Section>
      <Paragraph>
        <strong>Connect with Me</strong>
      </Paragraph>
      <Paragraph>
        I am based in Seattle, Washington, and am always eager to collaborate on innovative data projects. Feel free to reach out to me at <a href="mailto:issa.abdulkadir@yahoo.com">issa.abdulkadir@yahoo.com</a> or connect with me on professional networks.
      </Paragraph>
    </Section>
  </AboutContainer>
);

export default About;
