import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/index';
import NavBar from '../Components/NavBar';
import ContactFormPopup from '../Components/ContactFormPopup';
import ContactFormStatic from '../Components/ContactFormStatic';
import StackedComponents from '../Components/stackedcomponents';
import VideoComponent from '../Components/VideoComponent';
import videoSrc from '../assets/1096229783-preview.mp4'; // Import video file
import brain from '../assets/brain.png'; // Import video file
import background from '../assets/hero-background.png'
import CompanyBanner from '../Components/CompanyBanner';


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleComponent = () => {
        setIsOpen(!isOpen);
      };

      const componentsData = [
        { title: 'Component 1', description: 'Description 1', img: brain },
        { title: 'Component 2', description: 'Description 2' },
        { title: 'Component 3', description: 'Description 3' },
        // Add more data objects for additional components
      ];

      const teamData = [
        { title: 'Component 1', description: 'Description 1', img:'' },
        { title: 'Component 2', description: 'Description 2' },
        { title: 'Component 3', description: 'Description 3' },
        // Add more data objects for additional components
      ];
  return (

    <ParentApp>
        <NavBar />
      <HeroPanel>
        <h1>Let's Jam, Toronto!</h1>
        <p>
            Inspiring next generational talent to do better for the world 
        </p>
        <Button onClick={toggleComponent} >Learn More</Button>
        {isOpen && <ContactFormPopup onClose={toggleComponent}/>}
      </HeroPanel>
      <CompanyBanner/>
      <div>
        <StackedComponents data={componentsData} />
      </div>
      <VideoComponent videoSrc={videoSrc} />
      <div>
        <h1>Meet The Team</h1>
        <StackedComponents data={teamData} />
      </div>
      <ContactFormStatic/>
        
      {/* Other components or content for the homepage */}
    </ParentApp>
  );
};

const HeroPanel = styled.div`
  // background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${background});
  color: white;
  padding: 80px 20px;
  text-align: center;
  min-height: 50vh;
  font-family: regular;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1rem;


  p{
    font-size: 1.5rem;
  }

  button{
    margin: auto auto 0 auto;
  }
`;

const ParentApp = styled.div`
  background-color: #F2EDDC;
`


export default HomePage;