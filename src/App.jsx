// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList'; // Importar ProductList
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import Users from './components/Users';
import { UserProvider } from './userContext';
import axios from 'axios';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  useEffect(() => {
    // Función para cargar productos
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/productos');
        setProducts(response.data); // Asume que response.data es un array de productos
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    fetchProducts(); // Llamar a la función para cargar productos
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <UserProvider>
      <Header />
      <main className="container my-4">
        <ProductList products={products} onShowDetails={handleShowDetails} /> {/* Llamar al nuevo componente */}
      </main>
      <Users />
      <Footer />
      {selectedProduct && (
        <ProductModal
          show={showModal}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
    </UserProvider>
  );
};

export default App;
