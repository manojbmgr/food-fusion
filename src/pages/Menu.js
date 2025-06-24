import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { addToCart } from '../store/cartSlice';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
const MenuTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3436;
`;
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;
const MenuItem = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;
const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ItemContent = styled.div`
  padding: 1.5rem;
`;
const ItemTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #2d3436;
`;
const ItemDescription = styled.p`
  color: #636e72;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;
const ItemPrice = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff5252;
  }
`;
const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #636e72;
`;
const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  font-size: 1.2rem;
`;
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        // Using TheMealDB API for food items
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
        const meals = response.data.meals.map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions?.substring(0, 100) + '...',
          price: Math.floor(Math.random() * 20) + 10, // Random price between 10 and 30
          image: meal.strMealThumb
        }));
        setMenuItems(meals);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch menu items. Please try again later.');
        setLoading(false);
      }
    };
    fetchMenuItems();
  }, []);
  const openModal = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };
  const handleAddToCart = () => {
    if (selectedItem) {
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(selectedItem));
      }
      closeModal();
    }
  };
  const handleGoToCart = () => {
    handleAddToCart();
    navigate('/cart');
  };
  const handleShopMore = () => {
    handleAddToCart();
    closeModal();
  };
  if (loading) {
    return <LoadingMessage>Loading menu items...</LoadingMessage>;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  return (
    <MenuContainer>
      <MenuTitle>Our Menu</MenuTitle>
      <MenuGrid>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemContent>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <AddToCartButton onClick={() => openModal(item)}>
                Buy
              </AddToCartButton>
            </ItemContent>
          </MenuItem>
        ))}
      </MenuGrid>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedItem && (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>{selectedItem.name}</h3>
            <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '120px', borderRadius: '8px', marginBottom: '1rem' }} />
            <p style={{ color: '#ff6b6b', fontWeight: 'bold', marginBottom: '1rem' }}>${selectedItem.price.toFixed(2)}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #dfe6e9', background: 'white', color: '#ff6b6b', cursor: 'pointer' }}>-</button>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #dfe6e9', background: 'white', color: '#ff6b6b', cursor: 'pointer' }}>+</button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={handleGoToCart} style={{ padding: '0.7rem 1.5rem', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Go to Cart</button>
              <button onClick={handleShopMore} style={{ padding: '0.7rem 1.5rem', background: '#636e72', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Shop More</button>
            </div>
          </div>
        )}
      </Modal>
    </MenuContainer>
  );
};
export default Menu;