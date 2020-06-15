import React from 'react';

export default function CartSummaryItem(props) {

  return (
    <div>
      <div className='d-inline-flex align-items-center text-light bg-dark col-12 p-2 justify-content-between'>
        <header className='d-inline-flex align-items-center'>
          <i className='fas fa-search-dollar fa-2x ml-5'></i>
          <h1>Wicked Sales</h1>
        </header>
        <header className='d-inline-flex align-items-center'>
          <h4>{`${props.cartItemCount} Items`}</h4>
          <i className="fas fa-shopping-cart fa-2x ml-2 mr-5"></i>
        </header>
      </div>
    </div>
  );

}
