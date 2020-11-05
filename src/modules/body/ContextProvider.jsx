import React from 'react';
import { contextShape } from '../shapes/shapes';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const imgUrl = 'media/img/';
  const products = [
    {
      name: 'banana',
      img: `${imgUrl}banana.png`,
      amount: 0,
      total: 0,
      price: 10,
    },
    {
      name: 'apple',
      img: `${imgUrl}apple.png`,
      amount: 0,
      total: 0,
      price: 8,
    },
    {
      name: 'papaya',
      img: `${imgUrl}papaya.png`,
      amount: 0,
      total: 0,
      price: 10,
      promo: [3, 0.5],
    },
  ];
  const basket = new Set();

  return (
    <Context.Provider value={[products, basket]}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = contextShape.isRequired;
