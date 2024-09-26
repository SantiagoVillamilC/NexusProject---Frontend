import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import UserProfile from './UserProfile';
import Auth from './Auth';
import { useUser } from '../userContext';
import '../styles/Header.css';

const Header = () => {
  const { user, setUser } = useUser();  // Obtén usuario del contexto
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleLoginSuccess = (usuario) => {
    setUser(usuario);  // Almacena el usuario al iniciar sesión
    setAuthModalOpen(false); // Cierra el modal de autenticación después del login
  };

  const handleLogout = () => {
    setUser(null);  // Limpiar el usuario del estado global
  };

  const handleAuthReopen = () => {
    setAuthModalOpen(true);  // Reabrir el modal de autenticación
  };

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="site-name">Project Nexus | E-commerce</Navbar.Brand>
      <Nav className="ml-auto">
        {!user ? (
          <>
            <button onClick={() => setAuthModalOpen(true)}>Iniciar Sesión</button>
            {isAuthModalOpen && (
              <Auth
                closeModal={() => setAuthModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
              />
            )}
          </>
        ) : (
          <UserProfile
            user={user}
            onLogout={handleLogout}
            onAuthReopen={handleAuthReopen}
          />
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
