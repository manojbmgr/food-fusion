import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { clearCart } from '../store/cartSlice';

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Title = styled.h2`
  text-align: center;
  color: #2d3436;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f2f6;
`;

const Total = styled.div`
  text-align: right;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ff5252;
  }
`;

const SuccessMsg = styled.div`
  text-align: center;
  padding: 2rem 0;
  h2 {
    color: #2d3436;
    margin-bottom: 1rem;
  }
  p {
    color: #636e72;
  }
`;

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [form, setForm] = useState({ name: '', address: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(clearCart());
  };

  if (submitted) {
    return (
      <CheckoutContainer>
        <SuccessMsg>
          <h2>Thank you for your order!</h2>
          <p>Your order has been placed. We will contact you soon.</p>
        </SuccessMsg>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <Title>Checkout</Title>
      <CartList>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </CartItem>
        ))}
      </CartList>
      <Total>Total: ${(totalAmount + 5).toFixed(2)} (incl. $5 delivery)</Total>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Delivery Address"
          required
          value={form.address}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Place Order</SubmitButton>
      </Form>
    </CheckoutContainer>
  );
};

export default Checkout; 