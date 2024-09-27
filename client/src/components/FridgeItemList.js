import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../actions/fridgeActions';

const FridgeItemList = () => {
  const dispatch = useDispatch();
  const fridgeItems = useSelector(state => state.fridge.items);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <h2>Fridge Items</h2>
      <ul>
        {fridgeItems.map(item => (
          <li key={item._id}>{item.name} - Added on: {new Date(item.dateAdded).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default FridgeItemList;
