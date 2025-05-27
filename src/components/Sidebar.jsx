import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBars, FaChartLine, FaUserFriends,
  FaCalendarAlt, FaUserMd, FaCog,
  FaSignOutAlt
} from 'react-icons/fa';
import logoFull from '../assets/logo.png';
import logoIcon from '../assets/logo-icon.png';
import userAvatar from '../assets/user.jpg';
import './Sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navigate = useNavigate();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleTheme = () => setDarkMode(!darkMode);
  const handleLogout = () => {
    localStorage.removeItem('token'); // ou sessionStorage
    navigate('/'); // redireciona pro login
  };

  const menuItems = [
    { icon: <FaChartLine />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaUserFriends />, label: 'Pacientes', path: '/pacientes' },
    { icon: <FaCalendarAlt />, label: 'Agendas', path: '/agendamentos' },
    { icon: <FaUserMd />, label: 'Profissionais', path: '/profissionais' },
    { icon: <FaCog />, label: 'Configurações', path: '/configuracoes' }
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="top-section">
        <img
          src={collapsed ? logoIcon : logoFull}
          alt="Logo"
          className="logo"
        />
        <FaBars className="toggle-btn" onClick={toggleSidebar} />
      </div>

      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={activeItem === item.label ? 'active' : ''}
              onClick={() => {
                setActiveItem(item.label);
                navigate(item.path);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={userAvatar} alt="User" className="user-avatar" />
          {!collapsed && (
            <div className="user-info">
              <span className="user-name">Dr. Wendell</span>
              <span className="user-role">Administrador</span>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <div className="theme-toggle">
            <div className={`toggle-switch ${darkMode ? 'active' : ''}`} onClick={toggleTheme}>
              <div className="switch-handle" />
            </div>
            {!collapsed && (
              <span className="switch-label">{darkMode ? 'Modo Escuro' : 'Modo Claro'}</span>
            )}
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            {!collapsed && <span>Sair</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
