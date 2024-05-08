import React from "react";
import styled from "styled-components";

// Define the data for the companies
const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
  },
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
};

const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 20vh;
  justify-content: center;
  background-color: gray;
  padding: 16px 8px;
`;

const BannerText = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  text-align: center;
  height: 100%;

  h2{
    padding: 0;
    margin: 8px;
  }
`;

const CompanyCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
 
`;

const CompanyCard = styled.div`
  height: 32px;
  min-width: 80px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 5px; /* Reduced margin */
  border-radius: 10px;
  text-align: center;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  div {
    padding: 10px;
  }
`;

const Logo = styled.img`
  max-width: 80px; /* Reduced max-width */
  height: auto; /* Maintain aspect ratio */
`;

export default CompanyBanner;
