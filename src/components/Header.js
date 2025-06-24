import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #ff6b6b;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #ffe66d;
  }
`;

const CartIcon = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ffe66d;
  color: #ff6b6b;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Food-Fusion</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <CartIcon to="/cart">
            <FaShoppingCart size={24} />
            <CartCount>{cartQuantity}</CartCount>
          </CartIcon>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 