import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(err => console.error(err));
  }

  renderProducts() {
    const { products } = this.state;
    const productsList = products.map(product => {
      return (
        <ProductListItem
          key={product.productId}
          img={product.image}
          name={product.name}
          price={product.price}
          description={product.shortDescription}/>
      );
    });
    return productsList;
  }

  render() {
    return (
      <div className='d-flex flex-wrap'>
        {this.renderProducts()}
      </div>
    );
  }
}
