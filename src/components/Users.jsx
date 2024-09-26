import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/usuarios'); // Cambia según tu ruta
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.length > 0 ? (
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default Users;
