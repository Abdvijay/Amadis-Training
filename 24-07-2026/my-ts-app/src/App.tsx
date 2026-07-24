// import React from 'react';
import Header from './components/header';
import ProductCard from './components/productCard';
import Footer from './components/footer';
// import Props from './components/props';

function App() {
  const product1 = {
    product_name: "Laptop",
    product_amount: 25000,
    product_colors: ["Red", "Green", "Blue"]
  };

  const product2 = {
    product_name: "Mobile"
  };

  return (
    <div
      style={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Header />

      <main style={{ flex: 1, padding: '20px' }}>
        {/* <ProductCard product={product1} />
        <ProductCard product={product2} /> */}
        {/* <Props /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;