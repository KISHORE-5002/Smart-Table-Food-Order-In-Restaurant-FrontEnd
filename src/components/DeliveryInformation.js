import React from 'react';

const DeliveryInformation = ({
  orderDetails,
  handleInputChange,
  cart,
  grandTotal,
  setCheckoutStep,
  handlePlaceOrder
}) => {
  return (
    <div className="checkout-form">
      <h2>Delivery Information</h2>
      <button className="back-button" onClick={() => setCheckoutStep('menu')}>
        &larr; Back to Menu
      </button>

      <form onSubmit={(e) => {
        e.preventDefault();
        handlePlaceOrder();
      }}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderDetails.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={orderDetails.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            value={orderDetails.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Delivery Instructions (Optional)</label>
          <textarea
            id="instructions"
            name="instructions"
            value={orderDetails.instructions}
            onChange={handleInputChange}
            placeholder="Gate code, floor number, etc."
          />
        </div>

        <div className="order-summary">
          <h3>Your Order</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="order-total">
            <p>Total: ${grandTotal.toFixed(2)}</p>
          </div>
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default DeliveryInformation;