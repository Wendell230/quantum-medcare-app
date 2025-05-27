import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '2rem', flex: 1 }}>
        <h1>Bem-vindo à Dashboard</h1>
        <p>Essa é a área principal do sistema.</p>
      </div>
    </div>
  );
}

export default Dashboard;
