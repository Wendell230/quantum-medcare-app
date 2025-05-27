import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FilterPanel from '../components/FilterPanel';
import ScheduleGrid from '../components/ScheduleGrid';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedProfessional, setSelectedProfessional] = useState('');

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h2 className="page-title">Agendamentos</h2>
        <FilterPanel
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedProfessional={selectedProfessional}
          setSelectedProfessional={setSelectedProfessional}
        />
        <ScheduleGrid
          date={selectedDate}
          professional={selectedProfessional}
        />
      </main>
    </div>
  );
};

export default Schedule;