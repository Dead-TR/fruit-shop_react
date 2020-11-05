import React, { useContext, useState } from 'react';
import { Context } from '../../ContextProvider';
import { Product } from './Product/Product';
import './product-list.css';

export const ProductList = () => {
  const [products] = useContext(Context);

  return (
    <section className="product-list">
      {products.map(product => (
        <div
          key={product.name}
          className="product"
        >
          <Product
            name={product.name}
            price={product.price}
            img={product.img}
            promo={product.promo}
          />
        </div>
      ))}
    </section>
  );
};
