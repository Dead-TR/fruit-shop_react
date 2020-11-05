import React, { useState } from 'react';
import { BasketMenu } from './BasketMenu/BasketMenu';
import './basket.css';

export const Basket = () => {
  const [slideBar, setSlideBar] = useState(false);
  const getBasket = () => {
    setSlideBar(!slideBar);
  };

  return (
    <section className="basket">
      <section className="basket__roof">
        <button
          type="button"
          className="basket__button"
          onClick={getBasket}
        >
          <img
            src="media/icons/basket.png"
            alt="basket"
            className="basket__item"
          />
        </button>
      </section>

      <section
        className={
          !slideBar ? 'basket__menu'
            : 'basket__menu basket__menu_active'
        }
      >
        <BasketMenu />
      </section>
    </section>
  );
};
