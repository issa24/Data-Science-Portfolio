import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.5rem 0 0.2rem;
  font-size: 1rem;
  color: #666;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.7rem;
  font-size: 1rem;
  color: #fff;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem 0;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // for example by sending the data to your server
    alert('Form submitted!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact - Data Science Portfolio</title>
      </Helmet>
      <Title>Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
