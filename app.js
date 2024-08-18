import React, { useState } from 'react';
import PlantList from './PlantList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div className="App">
      <h1>Plantas de Interior</h1>
      <PlantList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
