import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch('api/products/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>product details</h1>
      </div>
    );
  }
}
