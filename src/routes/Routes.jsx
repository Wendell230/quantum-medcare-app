import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup'; 
import Dashboard from '../pages/Dashboard';
import Schedule from '../pages/Schedule';

// Protege rotas privadas
function PrivateRoute({ children }) {
  const token = localStorage.getItem('token'); // ou sessionStorage
  return token ? children : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard protegido */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Agenda protegida */}
        <Route
          path="/agendamentos"
          element={
            <PrivateRoute>
              <Schedule />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;