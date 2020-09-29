import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Header(props) {

  return (
    <>
      <Nav className="site-header flex-xs-column d-inline-flex align-items-center text-light bg-dark col-12 p-2 justify-content-between" activeKey="/catalog">
        <Nav.Item>
          <header className='d-inline-flex align-items-center'>
            <img className='aperture-icon ml-5 mr-1' src="./images/aperture-icon.png"></img>
            <h1 className="header-title" onClick={() => props.setView('catalog', {})}>LensCraft</h1>
          </header>
        </Nav.Item>
        <Nav.Item>
          <header
            className='shopping-cart d-inline-flex align-items-center'
            onClick={() => props.setView('cart', {})}
            type='image'>
            <h4>{`${props.cartItemCount} Items`}</h4>
            <i className="fas fa-shopping-cart fa-2x ml-2 mr-5"></i>
          </header>
        </Nav.Item>
      </Nav>
    </>
  );

}
