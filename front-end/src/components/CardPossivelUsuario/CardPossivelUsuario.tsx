import React from 'react';
import './CardPossivelUsuario.css'
import perfilImg from 'src/assets/perfil.svg';

interface CardProps {
    nome: string;
    email: string;
}

const CardPossivelUsuario: React.FC<CardProps> = ({ nome, email }) => {
  return (
    <div className="card-possivel-usuario">
      <h2 id='nome-possivel-usuario'>{nome}</h2>
      <p>{email}</p>
      {/* <img src={perfilImg} alt="Perfil" className='perfil-imagem' /> */}
    </div>
  );
};

export default CardPossivelUsuario;
