import React, { useState } from 'react';
import './InputData.css';

interface InputDataProps {
  placeholder?: string; // Texto sugerido para a entrada
  iconSrc?: string; // Caminho da imagem do ícone de calendário
}

const InputData: React.FC<InputDataProps> = ({ placeholder = "DD/MM/YYYY", iconSrc = "src/assets/calendar.png" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="input-data-container">
      <img src={iconSrc} alt="Ícone" className="calendar-icon" />
      <input
        type="text"
        value={value}
        placeholder={!isFocused && !value ? placeholder : ''}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-data"
      />
    </div>
  );
};

export default InputData;