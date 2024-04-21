import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Components/index';
import Navbar from '../Components/nav';
import ContactFormPopup from '../Components/contactForm';
import StackedComponents from '../Components/stackedcomponents';
import VideoComponent from '../Components/VideoComponent';
import videoSrc from '../utils/1096229783-preview.mp4'; // Import video file


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleComponent = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div>
        <Navbar />
      <HeroPanel>
        <h1>Let's Jam, Toronto!</h1>
        <p>Discover amazing things here.</p>
        <Button onClick={toggleComponent} >Learn More</Button>
        {isOpen && <ContactFormPopup onClose={toggleComponent}/>}
      </HeroPanel>
      <div>
        <StackedComponents />
      </div>
      <VideoComponent videoSrc={videoSrc} />

        
        

      {/* Other components or content for the homepage */}
    </div>
  );
};

const HeroPanel = styled.div`
  background-color: #333;
  color: white;
  padding: 80px 20px;
  text-align: center;
`;


export default HomePage;