import React from 'react';
import { ContextProvider } from './modules/body/ContextProvider';
import { ProductList } from './modules/body/children/ProductList/ProductList';
import { Basket } from './modules/body/children/Basket/Basket';

function App() {
  return (
    <section className="app">
      <ContextProvider>
        <header>
          <Basket />
        </header>
        <main>
          <ProductList />
        </main>
      </ContextProvider>
    </section>
  );
}

export default App;
