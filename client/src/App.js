import React from 'react';
import FridgeItem from './components/FridgeItem';
import FridgeItemList from './components/FridgeItemList';

const App = () => {
  return (
    <div>
      <h1>Fridge Tracker</h1>
      <FridgeItem />
      <FridgeItemList />
    </div>
  );
};

export default App;