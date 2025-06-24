import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart, addToCart } from '../store/cartSlice';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
const CartTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2d3436;
`;
const CartEmpty = styled.div`
  text-align: center;
  padding: 3rem;
  color: #636e72;
  font-size: 1.2rem;
`;
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
`;
const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ItemName = styled.h3`
  margin: 0;
  color: #2d3436;
`;
const ItemPrice = styled.p`
  color: #ff6b6b;
  font-weight: bold;
  margin: 0;
`;
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const QuantityButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem;
  &:hover {
    color: #ff5252;
  }
`;
const Quantity = styled.span`
  font-weight: bold;
  color: #2d3436;
`;
const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    color: #ff5252;
  }
`;
const CartSummary = styled.div`
  margin-top: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  &:last-child {
    margin-bottom: 0;
    padding-top: 1rem;
    border-top: 1px solid #dfe6e9;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff5252;
  }
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Your Cart</CartTitle>
        <CartEmpty>Your cart is empty. Add some delicious items!</CartEmpty>
      </CartContainer>
    );
  }
  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <QuantityControls>
                <QuantityButton onClick={() => handleRemoveItem(item.id)}>
                  <FaMinus />
                </QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton onClick={() => dispatch(addToCart(item))}>
                  <FaPlus />
                </QuantityButton>
              </QuantityControls>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemoveItem(item.id)}>
              <FaTrash />
            </RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      <CartSummary>
        <SummaryRow>
          <span>Subtotal</span>
          <span>${totalAmount.toFixed(2)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Delivery Fee</span>
          <span>$5.00</span>
        </SummaryRow>
        <SummaryRow>
          <span>Total</span>
          <span>${(totalAmount + 5).toFixed(2)}</span>
        </SummaryRow>
        <CheckoutButton onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
};
export default Cart;