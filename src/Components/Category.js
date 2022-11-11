import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.categories);
  const construction = info[0];
  return (
    <div className="category">
      <h2>{construction}</h2>
      <button
        type="button"
        onClick={() => dispatch(checkStatus('Under Construction'))}
      >
        Check status
      </button>
    </div>
  );
};

export default Category;
