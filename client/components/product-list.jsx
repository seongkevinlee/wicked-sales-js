import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  render() {
    return (
      <div className='d-flex no-wrap'>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    );
  }
}
