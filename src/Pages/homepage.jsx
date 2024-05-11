import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/index';
import NavBar from '../Components/NavBar';
import ContactFormPopup from '../Components/ContactFormPopup';
import ContactFormStatic from '../Components/ContactFormStatic';
import StackedComponents from '../Components/StackedComponents';
import EventSlider from '../Components/EventSlider';
import VideoComponent from '../Components/VideoComponent';
import videoSrc from '../assets/1096229783-preview.mp4'; // Import video file
import brain from '../assets/brain.png'; // Import video file
import backgroundImage from '../assets/hero-background.png'
import CompanyBanner from '../Components/CompanyBanner';
import learnByDoingImage from '../assets/learn-by-doing.png'
import makeStuffThatMattersImage from '../assets/make-stuff-that-matters.png'
import yourNewCrewAwaitsImage from '../assets/your-new-crew-awaits.png'


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleComponent = () => {
        setIsOpen(!isOpen);
      };

      const componentsData = [
        { title: 'Make Stuff That Matters', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: makeStuffThatMattersImage },
        { title: 'Your New Crew Awaits', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', image: yourNewCrewAwaitsImage },
        { title: 'Learn By Doing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: learnByDoingImage },
        // Add more data objects for additional components
      ];

      const teamData = [
        { title: 'Component 1', description: 'Description 1', image: brain },
        { title: 'Component 2', description: 'Description 2',  image: brain },
        { title: 'Component 3', description: 'Description 3',  image: brain },
        // Add more data objects for additional components
      ];

      const eventSliderData = [
        { title: 'Event 1',  image: "" , date: ""},
        // { title: 'Event 2',  image: "", date: ""},
        // { title: 'Event 3',  image: "" , date: ""},

        // Add more data objects for additional components
      ];



  return (

    <ParentApp>
        <NavBar />
      <HeroPanel>
        <h1>Let's Jam, Toronto!</h1>
        <p>
            Inspiring next generational talent to do better for the world.
        </p>
        <Button onClick={toggleComponent} >Contact Us</Button>
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
      <EventSlider eventsData = {eventSliderData}></EventSlider>

      {/* <ContactFormStatic/> */}
        




      {/* Other components or content for the homepage */}
    </ParentApp>
  );
};

const HeroPanel = styled.div`
  // background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${backgroundImage});
  background-size: cover;
  color: white;
  padding: 80px 20px;
  text-align: center;
  min-height: 40vh;
  font-family: regular;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  p{
    font-size: 1.5rem;
  }

  ${Button}{
    margin: auto auto 0 auto;
    background-color: #0AAEF5;
    border: none;
    color: black;
    border-radius: 0;
  }
`;

const ParentApp = styled.div`
  background-color: #F2EDDC;
`


export default HomePage;