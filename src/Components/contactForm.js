import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Overlay>
      <FormContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <FormTitle>Contact Us</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 400px;
  width: 100%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #333;
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


export default ContactFormPopup;
