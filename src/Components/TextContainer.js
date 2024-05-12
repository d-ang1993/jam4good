import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
`;

// Styled component for the heading
const Heading = styled.h2`
  text-align: center;
  padding: 2rem 10rem;
  margin: 5rem 0;
`;

// React component
const TextContainer = ({ text }) => {
  return (
    <Container>
      <Heading>{text}</Heading>
    </Container>
  );
};

export default TextContainer;