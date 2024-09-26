// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onShowDetails }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={product.imagen} className="card-img-top" alt={product.nombre} /> {/* Asegúrate de que product.imageUrl exista */}
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">${product.precio}</p>
        <button className="btn btn-primary" onClick={() => onShowDetails(product)}>Ver Detalles</button>
      </div>
    </div>
  );
};

export default ProductCard;
