import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
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
          {this.renderCartItems()}
        </div>
      </div>
    );
  }
}
