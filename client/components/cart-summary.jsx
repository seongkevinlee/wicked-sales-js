import React from 'react';
import CartSummaryItem from './cart-summary-item';
import CalculateTotalCost from './calculate-total-cost';

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
          {this.props.cart.length <= 0 ? <h3 className='m-5'>There are no items in your cart</h3> : this.renderCartItems()}
        </div>
        <div className='ml-5 mr-5 d-flex justify-content-between'>
          <h2>
            {`Total: $${CalculateTotalCost(this.props)}.00`}
          </h2>
          <button
            className='btn btn-primary'
            onClick={() => this.props.setView('checkout', {})}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}
