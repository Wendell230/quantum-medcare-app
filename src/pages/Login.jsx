import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../services/api';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password); // deve retornar o token
      localStorage.setItem('token', response.token); // SALVA O TOKEN
      navigate('/dashboard'); // Redireciona se login for bem-sucedido
    } catch (err) {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Quantum MedCare Logo" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className="signup-link">
          Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
