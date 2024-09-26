import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Project Nexus, hecho por Santiago V.</p>
            <p><a href="https://github.com/SantiagoVillamilC/Project-Nexus" target="_blank">Repositorio de GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

