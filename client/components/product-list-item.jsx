import React from 'react';

export default function ProductListItem(props) {

  return (
    <div className='card col-3 m-2'>
      <img className='product-img card-img-top pt-3'
        src={props.img}
        alt={props.img}
        onClick={() => props.setView('details', props.id)}
      />
      <div className='card-body'>
        <h5 className="card-title">{props.name}</h5>
        <p className='text-muted'>{`$${props.price}`}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );

}
