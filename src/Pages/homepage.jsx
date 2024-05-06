import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/index';
import Navbar from '../Components/nav';
import ContactFormPopup from '../Components/contactForm';
import ContactFormStatic from '../Components/contactFormStatic';
import StackedComponents from '../Components/stackedcomponents';
import VideoComponent from '../Components/VideoComponent';
import videoSrc from '../utils/1096229783-preview.mp4'; // Import video file
import brain from '../utils/brain.png'; // Import video file
import CompanyBanner from '../Components/companyBanner';


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
        <Navbar />
      <HeroPanel>
        <h1>Let's Jam, Toronto!</h1>
        <p>
            We are excited to jam again! <br></br>
            This time it will be online with <strong>Indigifriends</strong> coming this May 2024.
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
  background-color: #333;
  color: white;
  padding: 80px 20px;
  text-align: center;
  height: 50vh;
  
  p > strong {
    font-weight: bold;
    color: #BF4F74;
  }
`;

const ParentApp = styled.div`
  background-color: #F2EDDC;
`


export default HomePage;