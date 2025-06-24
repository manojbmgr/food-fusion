import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: calc(100vh - 200px);
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5252;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3436;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: #2d3436;
`;

const FeatureDescription = styled.p`
  color: #636e72;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to Food-Fusion</HeroTitle>
          <HeroSubtitle>
            Discover the perfect blend of flavors and culinary excellence
          </HeroSubtitle>
          <CTAButton to="/menu">Explore Menu</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Why Choose Us</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🍽️</FeatureIcon>
            <FeatureTitle>Fresh Ingredients</FeatureTitle>
            <FeatureDescription>
              We use only the freshest ingredients sourced from local suppliers
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🚚</FeatureIcon>
            <FeatureTitle>Fast Delivery</FeatureTitle>
            <FeatureDescription>
              Quick and reliable delivery to your doorstep
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>👨‍🍳</FeatureIcon>
            <FeatureTitle>Expert Chefs</FeatureTitle>
            <FeatureDescription>
              Our dishes are prepared by experienced chefs
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturedSection>
    </HomeContainer>
  );
};

export default Home; 