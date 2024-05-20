import React from 'react';
import { Helmet } from 'react-helmet';

const Resume = () => (
  <div className="container-small">
    <Helmet>
      <title>Resume - Data Science Portfolio</title>
    </Helmet>
    <h1 className="title">My Resume</h1>
    <p className="description">
      You can view or download my resume using the links below.
    </p>
    <a href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} target="_blank" className="button">View Resume</a>
    <a href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} download className="button">Download Resume</a>
  </div>
);

export default Resume;
