import React, { useContext, useState } from 'react';
import { Context } from '../../ContextProvider';
import './product-list.css';

export const ProductList = () => {
  const [products, basket] = useContext(Context);
  const [reload, setReload] = useState(0);

  const addToBasket = (product) => {
    product.amount += 1;
    setReload(reload + 1);

    if (
      product.promo
      && product.amount % product.promo[0] === 0
    ) {
      product.total += (product.price * product.promo[1]);
    } else {
      product.total += product.price;
    }

    basket.add(product);
  };

  const removeFromBasket = (product) => {
    if (product.amount > 0) {
      if (
        product.promo
        && product.amount % product.promo[0] === 0
      ) {
        product.total -= (product.price * product.promo[1]);
      } else {
        product.total -= product.price;
      }

      product.amount -= 1;
      setReload(reload - 1);
    } else {
      basket.delete(product);
    }
  };

  return (
    <section className="product-list">
      {products.map(product => (
        <div
          key={product.name}
          className="product-list__item"
        >
          <h1 className="product-list__text">
            {product.name[0].toUpperCase() + product.name.slice(1)}
          </h1>

          <p className="product-list__text">
            {product.price}
            $
          </p>

          <img
            src={product.img}
            alt={product.name}
            className="product-list__img"
          />

          <div className="product-list__price-box">
            <button
              type="button"
              className="product-list__button"
              onClick={() => {
                removeFromBasket(product);
              }}
            >
              <img
                src="media/icons/removePink.ico"
                alt="add"
                className="product-list__button-img"
              />
            </button>

            <p className="product-list__text">
              {product.amount}
            </p>

            <button
              type="button"
              className="product-list__button"
              onClick={() => {
                addToBasket(product);
              }}
            >
              <img
                src="media/icons/addPink.ico"
                alt="add"
                className="product-list__button-img"
              />
            </button>

          </div>
        </div>
      ))}
    </section>
  );
};
