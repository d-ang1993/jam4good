// VideoComponent.js
import React from 'react';
import styled from 'styled-components';

// Define the video container with styled-components
const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Adjust the maximum width as needed */
  margin: 0 auto;
`;

// Define the video element with styled-components
const VideoElement = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px; /* Add border radius for rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow for depth effect */
`;

// Video component
const VideoComponent = ({ videoSrc }) => {
  return (
    <VideoContainer>
      <VideoElement controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
    </VideoContainer>
  );
};

export default VideoComponent;