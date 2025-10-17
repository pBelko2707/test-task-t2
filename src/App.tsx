import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>Ты сегодня покормил кота?</h1>
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
};

export default App;
