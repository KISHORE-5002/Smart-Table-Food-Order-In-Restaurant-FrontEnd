import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import '../App.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      image: 'Margherita Pizza.jpeg'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, cheese, pancetta, and black pepper',
      price: 14.99,
      category: 'Pasta',
      image: 'Spaghetti Carbonara.jpeg'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
      price: 9.99,
      category: 'Salads',
      image: 'Caesar Salad.jpeg'
    },
    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'Pizza with tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      category: 'Pizza',
      image: 'Pepperoni Pizza.jpeg'
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert with ladyfingers and mascarpone',
      price: 7.99,
      category: 'Desserts',
      image: 'Tiramisu.jpeg'
    },
    {
      id: 6,
      name: 'Penne Arrabiata',
      description: 'Penne pasta in a spicy tomato sauce',
      price: 13.99,
      category: 'Pasta',
      image: 'Penne Arrabiata.jpeg'
    }
  ];

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const deliveryFee = 2.99;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="header-content">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">Delicious dishes made with love</p>
        </div>
        <button
          className="cart-toggle"
          onClick={() => setShowCart(!showCart)}
          aria-label={showCart ? "Hide cart" : "View cart"}
        >
          <span className="cart-icon">🛒</span>
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </button>
      </div>

      <div className={`cart-summary ${showCart ? 'visible' : ''}`}>
        <div className="cart-header">
          <h3>Your Order</h3>
          <button className="close-cart" onClick={() => setShowCart(false)}>
            &times;
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <small>Add items from the menu to get started</small>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      className="quantity-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => addToCart(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-total-row">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="cart-total-row grand-total">
                <span>Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-buttons">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <div className="menu-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <MenuCard
            key={item.id}
            item={item}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
