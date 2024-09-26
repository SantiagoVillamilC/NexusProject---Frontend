import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Form, Button, Col, Row } from 'react-bootstrap';

const ProductList = ({ products, onShowDetails }) => {
  const [filters, setFilters] = useState({
    search: '',
    minPrice: '',
    maxPrice: '',
    type: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesMinPrice = filters.minPrice ? product.price >= filters.minPrice : true;
    const matchesMaxPrice = filters.maxPrice ? product.price <= filters.maxPrice : true;
    const matchesType = filters.type ? product.type === filters.type : true;
    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesType;
  });

  return (
    <div>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="search">
              <Form.Label>Buscar</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="minPrice">
              <Form.Label>Precio Minimo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio minimo"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="maxPrice">
              <Form.Label>Precio Maximo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio maximo"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={12} className="mt-3">
            <Form.Group controlId="type">
              <Form.Label>Filtra por tipo de producto</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
              >
                <option value="">Todos</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartwatch">Smartwatch</option>
                <option value="Tablet">Tablet</option>
                <option value="Headphones">Auriculares</option>
                <option value="Camera">Camaras</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Aplicar filtros</Button>
      </Form>

      <div className="d-flex flex-wrap justify-content-around">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onShowDetails={onShowDetails} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
