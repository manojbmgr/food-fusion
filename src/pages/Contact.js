import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const ContactTitle = styled.h2`
  text-align: center;
  color: #2d3436;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ff5252;
  }
`;

const ErrorMsg = styled.span`
  color: #ff6b6b;
  font-size: 0.95rem;
`;

const SuccessMsg = styled.div`
  text-align: center;
  padding: 2rem 0;

  h2 {
    color: #2d3436;
    margin-bottom: 1rem;
  }
  p {
    color: #636e72;
  }
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ContactContainer>
        <SuccessMsg>
          <h2>Thank you for contacting us!</h2>
          <p>We have received your message and will get back to you soon.</p>
        </SuccessMsg>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact; 