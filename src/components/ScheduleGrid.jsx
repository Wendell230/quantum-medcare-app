// ScheduleGrid.jsx atualizado
import React from 'react';

const hours = Array.from({ length: 10 }, (_, i) => 8 + i); // 8h às 17h

// Simulação de horários ocupados
const busySlots = {
  'joao': ['10', '14'],
  'ana': ['9', '15'],
  'carlos': ['11', '16']
};

const ScheduleGrid = ({ date, professional }) => {
  const isSlotBusy = (hour) => {
    if (!professional) return false;
    return busySlots[professional]?.includes(hour.toString());
  };

  const handleClick = (hour) => {
    if (isSlotBusy(hour)) return;
    
    const horaFormatada = `${hour}:00`;
    alert(`Agendar para ${horaFormatada}, Profissional: ${professional || 'qualquer'}, Data: ${date.toLocaleDateString()}`);
  };

  return (
    <div className="schedule-grid">
      {hours.map((hour) => {
        const isBusy = isSlotBusy(hour);
        return (
          <div 
            key={hour} 
            className={`time-slot ${isBusy ? 'busy' : 'free'}`} 
            onClick={() => handleClick(hour)}
          >
            <div className="time-slot-time">
              {hour}:00 - {hour + 1}:00
            </div>
            {professional && !isBusy && (
              <div className="time-slot-professional">
                Disponível
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleGrid;