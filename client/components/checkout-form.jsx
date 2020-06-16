import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div className='m-auto col-10'>
        <h1>My Cart</h1>
        <h4 className='text-muted mt-3'>Order Total:</h4>
        <form className='pt-4'>
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
          <button className='btn btn-link'>&lt; Continue Shopping</button>
          <button className='btn btn-success'>Place Order</button>
        </div>

      </div>
    );
  }
}
