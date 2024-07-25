import React from 'react';
import './CardPossivelUsuario.css';

interface CardProps {
    nome: string;
    email: string;
}

const CardPossivelUsuario: React.FC<CardProps> = ({ nome, email }) => {
    return (
        <div className="card-possivel-usuario">
            <div className="info-possivel-usuario">
                <h2 id='nome-possivel-usuario'>{nome}</h2>
                <p id='email-possivel-usuario'>{email}</p>
            </div>
            <div className='buttons-aceitar-rejeitar-possivel-usuario'>
                <button className='button-aceitar-membro'>✔ Aceitar membro</button>
                <button className='button-recusar-membro'>✘ Recusar membro</button>
            </div>
        </div>
    );
};

export default CardPossivelUsuario;