import React from 'react';
import { ContextProvider } from './modules/components/ContextProvider';
import { ProductList } from './modules/components/children/ProductList/ProductList';
import { Basket } from './modules/components/children/Basket/Basket';

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
