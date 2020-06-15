import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.showView = this.showView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
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
        return <ProductDetails setView={this.setView} params={this.state.view.params}/>;
      default :
        return null;
    }
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => {
        // console.log('responses:', response);
        return response.json();
      })
      .then(data => {
        // console.log('data:', data);
        this.setState({
          cart: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Header cartItemCount={this.state.cart.length}/>
        <div>
          {this.showView()}
        </div>
      </div>
    );
  }
}
