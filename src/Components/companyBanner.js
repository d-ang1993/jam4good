import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30vh;
  justify-content: space-around;
  background-color: gray;
`;


const BannerText = styled.div`
    width: 100%;    
    display: flex;
    align-items: end;
    justify-content: center;
`;


const CompanyCardContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CompanyCard = styled.div`
//   background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 20px;
  margin: 5px; /* Reduced margin */
  border-radius: 10px;
  text-align: center;

  div {
    padding: 10px;
  }
`;

const Logo = styled.img`
  max-width: 80px; /* Reduced max-width */
  height: auto; /* Maintain aspect ratio */
`;


// Define the data for the companies
const companies = [
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png' },
  // Add more companies as needed
];

// Define the Banner component
const CompanyBanner = () => {
  return (
    <BannerContainer>
        <BannerText>
        <h2>Join Members From Companies Like</h2>
        </BannerText>
        <CompanyCardContainer>
        {companies.map((company, index) => (
            <CompanyCard key={index}>
            <Logo src={company.logo} alt={company.name} />
            {/* <div id="companyName">{company.name}</div> */}
            </CompanyCard>
      ))}
         </CompanyCardContainer>
    </BannerContainer>
  );
}

export default CompanyBanner;