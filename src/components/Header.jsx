import React from 'react';
import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import UserProfile from './UserProfile';
import '../styles/Header.css';
import Auth from './Auth';

const Header = ({ user, onLogin, onLogout, onUpdate }) => {

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleLoginSuccess = (usuario) => {
    console.log('Usuario logueado:', usuario);
  }
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="site-name">Project Nexus | E-commerce</Navbar.Brand>
      <Nav className="ml-auto">
        <button onClick={() => setAuthModalOpen(true)}>Iniciar Sesión</button>

        {isAuthModalOpen && (
          <Auth
            closeModal={() => setAuthModalOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        <UserProfile user={user} onLogin={onLogin} onLogout={onLogout} onUpdate={onUpdate} />
      </Nav>
    </Navbar>
  );
};

export default Header;

