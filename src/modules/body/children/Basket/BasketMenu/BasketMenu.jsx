import React, { useContext } from 'react';
import { Context } from '../../../ContextProvider';
import './basket-menu.css';

export const BasketMenu = () => {
  const [basket] = useContext(Context);
  const products = [...basket];
  let totalCost = 0;

  return (
    <section className="basket-menu">
      <h1 className="basket-menu__title">You Basket</h1>
      <div className="basket-menu__products">
        {products.map((product) => {
          if (product.amount > 0) {
            totalCost += product.total;

            return (
              <div
                className="basket-menu__product-item"
                key={product.name}
              >
                <h1 className="basket-menu__product-title">
                  {
                    product.name[0].toUpperCase()
                    + product.name.slice(1)
                  }
                </h1>

                <img
                  src={product.img}
                  alt={product.name}
                  className="basket-menu__product-img"
                />
                <div className="basket-menu__text-content">
                  <p className="basket-menu__product-text">
                    Amount:
                    &nbsp;
                    {product.amount}
                  </p>

                  <p className="basket-menu__product-text">
                    Total price:
                    &nbsp;
                    {product.total}
                    $
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
            The total cost:
            &nbsp;
            {totalCost}
            $
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
