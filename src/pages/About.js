import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3436;
`;

const AboutSection = styled.section`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MemberBio = styled.p`
  color: #636e72;
  font-size: 0.9rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Food-Fusion</AboutTitle>

      <AboutSection>
        <SectionTitle>Our Story</SectionTitle>
        <SectionContent>
          Food-Fusion was founded in 2020 with a simple mission: to bring together
          the best flavors from around the world and create unique culinary
          experiences. Our chefs combine traditional recipes with modern
          techniques to create dishes that are both familiar and exciting.
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Our Philosophy</SectionTitle>
        <SectionContent>
          We believe that food is more than just sustenance – it's an experience
          that brings people together. That's why we source the finest
          ingredients and prepare each dish with care and attention to detail.
          Our commitment to quality and innovation has made us a favorite among
          food lovers in the community.
        </SectionContent>
      </AboutSection>

      <AboutSection>
        <SectionTitle>Our Team</SectionTitle>
        <SectionContent>
          Meet the talented individuals who make Food-Fusion special. Our team of
          experienced chefs and dedicated staff work together to create
          memorable dining experiences for our customers.
        </SectionContent>
        <TeamGrid>
          <TeamMember>
            <MemberImage
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Chef John"
            />
            <MemberName>John Smith</MemberName>
            <MemberRole>Head Chef</MemberRole>
            <MemberBio>
              With over 15 years of experience in international cuisine, John
              leads our kitchen with creativity and passion.
            </MemberBio>
          </TeamMember>

          <TeamMember>
            <MemberImage
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Chef Maria"
            />
            <MemberName>Maria Garcia</MemberName>
            <MemberRole>Sous Chef</MemberRole>
            <MemberBio>
              Maria brings her expertise in Mediterranean cuisine and a love for
              fresh, seasonal ingredients.
            </MemberBio>
          </TeamMember>

          <TeamMember>
            <MemberImage
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Chef David"
            />
            <MemberName>David Chen</MemberName>
            <MemberRole>Pastry Chef</MemberRole>
            <MemberBio>
              David's innovative desserts and pastries have become a signature
              part of the Food-Fusion experience.
            </MemberBio>
          </TeamMember>
        </TeamGrid>
      </AboutSection>
    </AboutContainer>
  );
};

export default About; 