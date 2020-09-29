import React from 'react';
import CalculateTotalCost from './calculate-total-cost';
import WarningModal from './modal';
import ListGroup from 'react-bootstrap/ListGroup';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.noEmptyFields = this.noEmptyFields.bind(this);
    this.checkoutItems = this.checkoutItems.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'name-input') {
      this.setState({
        name: event.target.value
      });
    }
    if (event.target.id === 'cc-input') {
      this.setState({
        creditCard: event.target.value
      });
    }
    if (event.target.id === 'addy-input') {
      this.setState({
        address: event.target.value
      });
    }
  }

  noEmptyFields() {
    if (this.state.name && this.state.creditCard && this.state.address) {
      return false;
    } else {
      return true;
    }
  }

  checkoutItems() {
    const checkoutItems = this.props.cart;
    const checkoutItemsList = checkoutItems.map((checkoutItem, index) => {
      return (
        <ListGroup.Item key={index} className="d-inline-flex justify-content-between align-items-center">
          <div className="d-inline-flex justify-content-start align-items-center">
            <img className="checkout-img" src={checkoutItem.image} alt="checkoutItem.name"/>
            <p className="pl-2">{`${checkoutItem.name}`}</p>
          </div>
          <p>{`$${checkoutItem.price}.00`}</p>
        </ListGroup.Item>
      );
    });
    return (
      checkoutItemsList
    );
  }

  render() {
    const { name, creditCard, address } = this.state;
    const order = {
      name,
      creditCard,
      shippingAddress: address
    };

    return (
      <div className='checkout p-2'>
        <WarningModal/>
        <h1 className="mb-3">My Cart</h1>
        <ListGroup >
          <header className="d-inline-flex justify-content-between">
            <h4 className="pl-4">Product</h4>
            <h4 className="pr-4">Price</h4>
          </header>
          {this.checkoutItems()}
        </ListGroup>
        <h4 className='text-muted mt-3 text-right'>
          {`Order Total: $${CalculateTotalCost(this.props)}.00`}
        </h4>
        <form className='pt-5'>
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input
              type="text"
              className="form-control"
              id='name-input'
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cc-input">Credit Card</label>
            <input
              type="text"
              className="form-control"
              id='cc-input'
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addy-input">Shipping Address</label>
            <textarea
              type="text"
              className="form-control"
              id='addy-input'
              rows='3'
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className='d-flex justify-content-between'>
          <button
            className='btn btn-info'
            onClick={() => this.props.setView('catalog', {})}>
              &lt; Continue Shopping
          </button>
          <button
            disabled={this.noEmptyFields()}
            className={this.props.cart.length === 0 ? 'btn btn-success d-none' : 'btn btn-success'}
            onClick={() => this.props.placeOrder(order)}>
            Place Order
          </button>
        </div>

      </div>
    );
  }
}
