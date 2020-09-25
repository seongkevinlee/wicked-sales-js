import React from 'react';
import CartSummaryItem from './cart-summary-item';
import CalculateTotalCost from './calculate-total-cost';
import WarningModal from './modal';

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
        <WarningModal/>
        <div className="cart-summary">
          <div className="m-auto col-sm-11">
            <button className='back-btn btn btn-info'
              onClick={() => this.props.setView('catalog', {})}>
            &lt; Back to catalog
            </button>
          </div>
          <div className='d-flex flex-column align-items-center col-12'>
            {this.props.cart.length <= 0 ? <h3 className='no-items text-white m-5'>There are no items in your cart</h3> : this.renderCartItems()}
          </div>
          <div className='col-11 m-auto d-flex justify-content-between align-items-center'>
            <h2 className="cart-total">
              {`Total: $${CalculateTotalCost(this.props)}.00`}
            </h2>
            <button
              className={this.props.cart.length === 0 ? 'checkout-btn btn btn-primary d-none' : 'checkout-btn btn btn-primary' }
              onClick={() => this.props.setView('checkout', {})}>
            Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
