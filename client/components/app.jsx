import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'checkout',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.showView = this.showView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  showView() {
    switch (this.state.view.name) {
      case 'catalog' :
        return <ProductList setView={this.setView} />;
      case 'details' :
        return <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}/>;
      case 'cart' :
        return <CartSummary setView={this.setView} cart={this.state.cart}/>;
      case 'checkout' :
        return <CheckoutForm/>;
      default :
        return null;
    }
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          cart: data
        });
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(cartItem => {
        const newCartItems = [...this.state.cart];
        newCartItems.push(cartItem);
        this.setState({
          cart: newCartItems
        });
      });
  }

  placeOrder(order) {
    // const name = order.name
    // const creditCard = order.creditCard
    // const shippingAddress = order.shippingAddress
    // const

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => response.json())
      .then(() => {
        this.setState({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
        <div>
          {this.showView()}
        </div>
      </div>
    );
  }
}
