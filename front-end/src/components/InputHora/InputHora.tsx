import React, { useState } from 'react';
import './InputHora.css';

interface InputHoraProps {
  placeholder?: string; // Texto sugerido para a entrada
  iconSrc?: string; // Caminho da imagem do ícone de relógio
}

const InputHora: React.FC<InputHoraProps> = ({ placeholder = "HH:MM", iconSrc = "src/assets/clock.png" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="input-hora-container">
      <img src={iconSrc} alt="Ícone" className="clock-icon" />
      <input
        type="text"
        value={value}
        placeholder={!isFocused && !value ? placeholder : ''}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-hora"
      />
    </div>
  );
};

export default InputHora;