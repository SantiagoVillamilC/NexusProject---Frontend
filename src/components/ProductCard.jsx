import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onShowDetails }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onShowDetails(product)}>Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

