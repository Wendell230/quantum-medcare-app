import React, { useState } from 'react';
import { format, isToday, isSameDay, addDays, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FaUserMd } from 'react-icons/fa'; 
import { FaRegCalendarAlt } from 'react-icons/fa';

const FilterPanel = ({ selectedDate, setSelectedDate, selectedProfessional, setSelectedProfessional }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Dados dos médicos (pode vir de API)
  const professionals = [
    { id: 'joao', name: 'Dr. João Silva', specialty: 'Cardiologista', avatar: '👨‍⚕️' },
    { id: 'ana', name: 'Dra. Ana Oliveira', specialty: 'Dermatologista', avatar: '👩‍⚕️' },
    { id: 'carlos', name: 'Dr. Carlos Souza', specialty: 'Ortopedista', avatar: '👨‍⚕️' }
  ];

  // Gerar 7 dias (hoje + 6 dias seguintes)
  const days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <div className="filter-panel">
      {/* Seletor de Médicos - Cards */}
      <div className="professionals-selector">
        <h3 className="filter-section-title">Selecione o profissional</h3>
        <div className="professionals-grid">
          <div 
            className={`professional-card ${!selectedProfessional ? 'selected' : ''}`}
            onClick={() => setSelectedProfessional('')}
          >
            <div className="avatar">🏥</div>
            <h4>Todos</h4>
            <p>Todos os profissionais</p>
          </div>
          
          {professionals.map(prof => (
            <div 
              key={prof.id}
              className={`professional-card ${selectedProfessional === prof.id ? 'selected' : ''}`}
              onClick={() => setSelectedProfessional(prof.id)}
            >
              <div className="avatar"><FaUserMd /></div>
              <h4>{prof.name}</h4>
              <p>{prof.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seletor de Data - Calendário Moderno */}
      <div className="date-selector">
        <h3 className="filter-section-title">Selecione a data</h3>
        
        <div className="date-input" onClick={() => setShowCalendar(!showCalendar)}>
          <span className="calendar-icon"><FaRegCalendarAlt /></span>
          {format(selectedDate, "PPPP", { locale: ptBR })}
        </div>
        
        {showCalendar && (
          <div className="calendar-popup">
            <div className="calendar-header">
              <button onClick={() => setSelectedDate(subDays(selectedDate, 1))}>◀</button>
              <h4>{format(selectedDate, "MMMM yyyy", { locale: ptBR })}</h4>
              <button onClick={() => setSelectedDate(addDays(selectedDate, 1))}>▶</button>
            </div>
            
            <div className="days-grid">
              {days.map(day => (
                <div 
                  key={day.toString()}
                  className={`day-cell ${
                    isSameDay(day, selectedDate) ? 'selected' : ''
                  } ${isToday(day) ? 'today' : ''}`}
                  onClick={() => {
                    setSelectedDate(day);
                    setShowCalendar(false);
                  }}
                >
                  <div className="day-name">{format(day, "EEE", { locale: ptBR })}</div>
                  <div className="day-number">{format(day, "d")}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;