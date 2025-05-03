import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Quantum MedCare Logo" className="login-logo" />
        <form>
          <input type="text" placeholder="Usuário" />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
            />
            <span className="eye-icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
