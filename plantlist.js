import React from 'react';

const plants = [
  { id: 1, name: 'Pothos', price: 20 },
  { id: 2, name: 'Sansevieria', price: 25 },
  { id: 3, name: 'Monstera', price: 30 },
];

const PlantList = ({ addToCart }) => {
  return (
    <div>
      <h2>Lista de Plantas</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} - ${plant.price}
            <button onClick={() => addToCart(plant)}>Añadir al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
