import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2d3436;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  &:hover {
    color: #ff6b6b;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Food-Fusion</FooterTitle>
          <p>Delicious food delivered to your doorstep.</p>
          <SocialLinks>
            <SocialIcon href="#" target="_blank">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/menu">Menu</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <p>123 Food Street</p>
          <p>Mumbar, IN, 000001</p>
          <p>Phone: (91) 9823000000 </p>
          <p>Email: info@food-fusion.com</p>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Food-Fusion. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 