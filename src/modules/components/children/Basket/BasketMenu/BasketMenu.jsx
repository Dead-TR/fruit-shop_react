import React, { useContext } from 'react';
import { Context } from '../../../ContextProvider';
import './basket-menu.css';

export const BasketMenu = () => {
  const [, basket] = useContext(Context);
  let totalCost = 0;

  return (
    <section className="basket-menu">
      <h1 className="basket-menu__title">You Basket</h1>
      <div className="basket-menu__products">
        {[...basket.names].map((name) => {
          if (basket.list[name].amount > 0) {
            totalCost += basket.list[name].total;

            return (
              <div
                className="basket-menu__product-item"
                key={basket.list[name].name}
              >
                <h1 className="basket-menu__product-title">
                  {
                    basket.list[name].name[0].toUpperCase()
                    + basket.list[name].name.slice(1)
                  }
                </h1>

                <img
                  src={basket.list[name].img}
                  alt={basket.list[name].name}
                  className="basket-menu__product-img"
                />
                <div className="basket-menu__text-content">
                  <p className="basket-menu__product-text">
                    {`Amount:
                      ${basket.list[name].amount}
                    `}
                  </p>

                  <p className="basket-menu__product-text">
                    {`
                      Total price:
                      ${basket.list[name].total}$
                    `}
                  </p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
      <div className="basket-menu__services">
        {totalCost > 0 ? (
          <p className="basket-menu__text">
            {`
              The total cost:
              ${totalCost}$
            `}
          </p>
        ) : (
          <p className="basket-menu__text">
            Basket is empty
          </p>
        )}
      </div>
    </section>
  );
};
