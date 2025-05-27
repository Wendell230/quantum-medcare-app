import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import { signup } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      setSuccess('Cadastro realizado com sucesso!');
      setTimeout(() => navigate('/'), 1500); // redireciona para login
    } catch (err) {
      setError('Erro ao cadastrar. Verifique os dados.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Quantum MedCare Logo" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <input
            type="text"
            name="firstName"
            placeholder="Nome"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
