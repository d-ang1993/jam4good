import React from 'react';
import styled from 'styled-components';

const StackedComponentsContainer = (props) => {
  // Data for each stacked component
  const componentsData = props.data

  return (
    <Container>
      {componentsData.map((data, index) => (
        <StackedComponent key={index} title={data.title} description={data.description} img={data.image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const StackedComponent = ({ title, description }) => {
  return (
    <ComponentContainer>
      <Circle />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ComponentContainer>
  );
};


const ComponentContainer = styled.div`
  margin-right: 20px; /* Adjust spacing between components */
  padding: 4rem;
  text-align: center;
  margin: auto;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #007bff;
  border-radius: 50%;
  margin-bottom: 10px;
  margin: auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #888;
`;

export default StackedComponentsContainer;
