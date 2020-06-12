import React from 'react';

export default function ProductListItem(props) {

  return (
    <div className='card col-3 mt-2'>
      <img className='product-img card-img-top col-12 m-2' style={{ display: 'cover' }} src="http://picsum.photos/200" alt=""/>
      <div className='card-body'>
        <h5 className="card-title">Product Name</h5>
        <p className='text-muted'>Product Price</p>
        <p className="card-text">Product description</p>
      </div>
    </div>
  );

}
