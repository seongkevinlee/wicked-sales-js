import React from 'react';

export default function CartSummary(props) {
  return (
    <div>
      <div>
        <button className='btn btn-link'
          onClick={() => props.setView('catalog', {})}>
          &lt; Back to catalog
        </button>
      </div>
    </div>
  );
}
