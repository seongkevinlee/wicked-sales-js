import React from 'react';

export default function Header(props) {

  return (
    <div>
      <header className='d-inline-flex align-items-center text-light bg-dark col-12 p-2'>
        <i className='fas fa-search-dollar fa-2x ml-5'></i>
        <h1>Wicked Sales</h1>
      </header>
    </div>
  );

}
