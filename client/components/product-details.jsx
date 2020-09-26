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
    fetch(`api/products/${this.props.params}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='product-details container'>
        <div className='mb-4'>
          <button className='btn btn-info' onClick={() => this.props.setView('catalog', {})}>&lt; Back to catalog</button>
        </div>
        <div className='product-detail-top d-flex no-wrap pl-3 pr-3 align-items-center'>
          <div className='col-sm-6 d-flex justify-content-center'>
            <img className='product-detail-img img-fluid' src={this.state.product ? this.state.product.image : 'No product found'} alt=""/>
          </div>
          <div className='product-desc d-flex flex-column justify-content-start pt-2'>
            <h3>{this.state.product ? this.state.product.name : 'No product found'}</h3>
            <h4 className='text-muted mt-3 mb-3'>{this.state.product ? `$${this.state.product.price}` : 'No product found'}</h4>
            <p>{this.state.product ? this.state.product.shortDescription : 'No product found'}</p>
            <button className='btn btn-primary' onClick={() => this.props.addToCart(this.state.product)}>Add to cart</button>
          </div>
        </div>
        <div className="product-long-desc p-3">
          <p>{this.state.product ? this.state.product.longDescription : 'No product found'}</p>
        </div>
      </div>
    );
  }
}
