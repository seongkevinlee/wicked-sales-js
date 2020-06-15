import React from 'react';

export default function CartSummaryItem(props) {

  const image = props.cartItems.image;
  const name = props.cartItems.name;
  const price = props.cartItems.price;
  const description = props.cartItems.shortDescription;

  return (
    <div className='d-flex col-10 img-thumbnail m-3'>
      <div className='col-6'>
        <img className='img-fluid cart-image' src={props.cartItems ? image : 'No product found'} alt={name} />
      </div>
      <div className='d-flex flex-column justify-content-start pt-2'>
        <h1>{props.cartItems ? name : 'No product found'}</h1>
        <h4 className='text-muted mt-3 mb-3'>{props.cartItems ? `$${price}` : 'No product found'}</h4>
        <p>{props.cartItems ? description : 'No product found'}</p>
      </div>
    </div>
  );

}
