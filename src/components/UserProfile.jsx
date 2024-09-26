import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useUser } from '../userContext';
import axios from 'axios';

const UserProfile = ({ onAuthReopen }) => {
  const { user, setUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmUpdate, setShowConfirmUpdate] = useState(false);
  const [userData, setUserData] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/usuarios/${userData.id}`);
      alert('Cuenta eliminada');
      setUser(null);
      handleClose();
      onAuthReopen();  // Reabrir el modal de autenticación
    } catch (error) {
      console.error('Error al eliminar la cuenta:', error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    // No se elimina la sesión aquí, solo se cierra el modal
  };

  const handleLogout = () => {
    setUser(null);  // Limpiar el usuario del contexto al cerrar sesión
    alert('Sesión cerrada');
    onAuthReopen();  // Reabrir el modal de autenticación
  };

  const handleShow = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/usuarios/nickname/${user.nickname}`);
      setUserData(response.data);
      setUpdatedData(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  const handleUpdate = async () => {
    setShowConfirmUpdate(true);
  };

  const confirmUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/v1/usuarios/${userData.id}`, updatedData);
      alert('Información actualizada');
      setShowConfirmUpdate(false);
    } catch (error) {
      console.error('Error al actualizar la información:', error);
    }
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.nickname || 'User')}&background=random`;

  if (!user) {
    return null;
  }

  return (
    <div>
      <Button onClick={handleShow} variant="link">
        Bienvenid@ {user.nickname} <img src={avatarUrl} alt={user.nombre} style={{ width: '40px', borderRadius: '50%', marginLeft: '10px' }} />
      </Button>

      <Modal show={showModal} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Perfil de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userData ? (
            <>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={updatedData.nombre}
                  onChange={(e) => setUpdatedData({ ...updatedData, nombre: e.target.value })}
                />
              </div>
              <div>
                <label>Nickname:</label>
                <input
                  type="text"
                  value={updatedData.nickname}
                  readOnly
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={updatedData.email}
                  onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                />
              </div>
              <div>
                <label>Dirección:</label>
                <input
                  type="text"
                  value={updatedData.direccion}
                  onChange={(e) => setUpdatedData({ ...updatedData, direccion: e.target.value })}
                />
              </div>
              <div>
                <label>Teléfono:</label>
                <input
                  type="text"
                  value={updatedData.telefono}
                  onChange={(e) => setUpdatedData({ ...updatedData, telefono: e.target.value })}
                />
              </div>
              <div>
                <label>Contraseña:</label>
                <input
                  type="password"
                  value={updatedData.contraseña}
                  onChange={(e) => setUpdatedData({ ...updatedData, contraseña: e.target.value })}
                />
              </div>
            </>
          ) : (
            <p>Cargando información del usuario...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogout}>Cerrar sesión</Button>
          <Button variant="danger" onClick={() => setShowConfirmDelete(true)}>Eliminar Cuenta</Button>
          <Button variant="primary" onClick={handleUpdate}>Actualizar Información</Button>
          <Button variant="light" onClick={handleClose}>Cerrar Ventana</Button> {/* Botón para cerrar el modal */}
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmDelete} onHide={() => setShowConfirmDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar tu cuenta?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmDelete(false)}>Cancelar</Button>
          <Button variant="danger" onClick={handleDeleteAccount}>Eliminar Cuenta</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmUpdate} onHide={() => setShowConfirmUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Actualización</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas actualizar tu información?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmUpdate(false)}>Cancelar</Button>
          <Button variant="primary" onClick={confirmUpdate}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
