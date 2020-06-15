import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
    this.calculateTotalCost = this.calculateTotalCost.bind(this);
  }

  renderCartItems(props) {
    const cartItems = this.props.cart;
    const cartItemsList = cartItems.map(cartItem => {
      return <CartSummaryItem
        key={cartItem.cartItemId}
        cartItems={cartItem}/>;

    });
    return cartItemsList;
  }

  calculateTotalCost() {
    const cartItems = this.props.cart;
    const costsArray = [];
    cartItems.map(price => {
      costsArray.push(price.price);
    });
    const totalCosts = costsArray.reduce((a, b) => a + b, 0);
    return totalCosts;
  }

  render() {
    return (
      <div>
        <div>
          <button className='btn btn-link'
            onClick={() => this.props.setView('catalog', {})}>
            &lt; Back to catalog
          </button>
        </div>
        <div className='d-flex flex-column align-items-center col-12'>
          {this.props.cart.length <= 0 ? <h3 className='m-5'>There are no items in your cart</h3> : this.renderCartItems()}
        </div>
        <div className='ml-5'>
          <h2>
            {`Total: $${this.calculateTotalCost()}.00`}
          </h2>
        </div>
      </div>
    );
  }
}
