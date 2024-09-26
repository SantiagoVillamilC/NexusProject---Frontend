// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Asegúrate de tener este componente creado

const ProductList = ({ products, onShowDetails }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} onShowDetails={onShowDetails} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;
