import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../userContext.jsx';
import '../styles/Auth.css';
import Register from './Register.jsx'; // Importar el componente Register

const Auth = ({ closeModal, onLoginSuccess }) => {
    const [showRegister, setShowRegister] = useState(false);
    const { setUser } = useUser();
    const [nickname, setNickname] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    // Función para manejar el login
    const handleLogin = async () => {
        if (validateInputs()) {
            try {
                const response = await axios.post('http://localhost:3000/api/v1/usuarios/login', {
                    nickname,
                    contraseña,
                });

                if (response.data.success) {
                    setError('');
                    onLoginSuccess(response.data.usuario);
                    closeModal();
                    setUser(response.data.usuario);
                } else {
                    setError('Nickname o contraseña incorrectos');
                }
            } catch (err) {
                setError('Nickname o contraseña incorrectos');
                console.error('Error de login:', err.response.data);
            }
        }
    };

    // Función para validar los inputs
    const validateInputs = () => {
        if (nickname === '' || contraseña === '') {
            setError('Todos los campos son obligatorios');
            return false;
        }
        if (contraseña.length < 3) { // Asegúrate de que la contraseña tenga al menos 6 caracteres
            setError('La contraseña debe tener al menos 6 caracteres');
            return false;
        }
        return true;
    };

    return (
        <div className="auth-modal">
            <div className="auth-content">
                <h2>Iniciar Sesión</h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                    <label htmlFor="nickname">Nickname:</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Introduce tu nickname"
                    />
                </div>

                <div>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input
                        type="password"
                        id="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Introduce tu contraseña"
                    />
                </div>

                <button onClick={handleLogin}>Iniciar Sesión</button>

                <p>
                    ¿No tienes una cuenta? 
                    <button onClick={() => setShowRegister(true)}>Registrarse</button>
                </p>

                <Register show={showRegister} handleClose={() => setShowRegister(false)} />

                <button className="close-modal" onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default Auth;
