import React from 'react';

export default function CartSummaryItem(props) {

  const image = props.cartItems.image;
  const name = props.cartItems.name;
  const price = props.cartItems.price;
  const description = props.cartItems.shortDescription;

  return (
    <div className='d-flex col-10 img-thumbnail m-3 pt-3 pb-3'>
      <div className='col-6 text-center d-flex align-items-center'>
        <img className='img-fluid cart-image' src={props.cartItems ? image : 'No product found'} alt={name} />
      </div>
      <div className='d-flex flex-column justify-content-start pt-2 pr-2'>
        <h3 className="pt-2 pb-2">{props.cartItems ? name : 'No product found'}</h3>
        <h4 className='text-muted mt-3 mb-3'>{props.cartItems ? `$${price}` : 'No product found'}</h4>
        <p>{props.cartItems ? description : 'No product found'}</p>
      </div>
    </div>
  );

}
