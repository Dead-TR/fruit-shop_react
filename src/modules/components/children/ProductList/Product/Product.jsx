import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../../ContextProvider';
import { productShape } from '../../../../shapes/shapes';
import './product.css';

export const Product = ({ name, price, img, promo }) => {
  const [, basket] = useContext(Context);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  basket.list[name] = {
    amount,
    name,
    price,
    total,
    img,
  };

  useEffect(() => {
    basket.list[name].total = total;
    basket.list[name].amount = amount;
  }, [amount, total]);

  const addToBasket = () => {
    setAmount(amount + 1);
    basket.names.add(name);

    if (
      promo
      && (amount + 1) % promo[0] === 0
    ) {
      setTotal(total + (price * promo[1]));

      return;
    }

    setTotal(total + price);
  };

  const removeFromBasket = () => {
    if (amount > 0) {
      if (
        promo
        && (amount) % promo[0] === 0
      ) {
        setTotal(total - (price * promo[1]));
      } else {
        setTotal(total - price);
      }

      setAmount(amount - 1);

      return;
    }

    basket.names.delete(name);
  };

  return (
    <>
      <h1 className="product__text">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>

      <p className="product__text">
        {price}
        $
      </p>

      <img
        src={img}
        alt={name}
        className="product__img"
      />

      <div className="product__price-box">
        <button
          type="button"
          className="product__button"
          onClick={() => {
            removeFromBasket();
          }}
        >
          <img
            src="media/icons/removePink.ico"
            alt="add"
            className="product__button-img"
          />
        </button>

        <p className="product__text">
          {amount}
        </p>

        <button
          type="button"
          className="product__button"
          onClick={() => {
            addToBasket();
          }}
        >
          <img
            src="media/icons/addPink.ico"
            alt="add"
            className="product__button-img"
          />
        </button>

      </div>
    </>
  );
};

Product.propTypes = productShape.isRequired;
