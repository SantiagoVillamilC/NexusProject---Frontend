import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Register = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
    contraseña: '',
    nickname: '',
    tipo_usuario: 'cliente', // Añadir tipo de usuario por defecto como 'cliente'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Enviar la solicitud POST incluyendo el tipo_usuario
      await axios.post('http://localhost:3000/api/v1/usuarios', formData);
      alert('Registro exitoso'); // Puedes usar un modal o un toast en lugar de alert
      handleClose(); // Cerrar el modal después de registrar
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDireccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formContraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
