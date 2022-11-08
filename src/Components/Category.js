import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Category() {

  return (
    <div>
      <h2>{construction}</h2>
      <button
        type="button"
        onClick={() => dispatch(checkStatus('Under Construction'))}
      >
        Check status
      </button>
    </div>
  );
}

export default Category;
