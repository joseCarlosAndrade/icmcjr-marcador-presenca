import React from 'react';
import './CardEscolhaCargoUsuario.css';
import { Usuario, Cargos } from 'src/types';
import perfilImg from 'src/assets/perfil.svg';

interface CardEscolhaCargoUsuarioProps {
    usuario: Usuario;
    onChangeCargo: (nome: string, novoCargo: Cargos) => void;
}

const CardEscolhaCargoUsuario: React.FC<CardEscolhaCargoUsuarioProps> = ({ usuario, onChangeCargo }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeCargo(usuario.nome, event.target.value as Cargos);
    };

    return (
        <div className="card-escolha-cargo-usuario">
            <div className="info-usuario">
                <img src={perfilImg} alt="Perfil" className="imagem-usuario" />
                <h2 id='nome-usuario'>{usuario.nome}</h2>
            </div>
            <select className='seletor-cargos' value={usuario.cargo} onChange={handleChange}>
                <option value={Cargos.Membro}>{Cargos.Membro}</option>
                <option value={Cargos.Diretor}>{Cargos.Diretor}</option>
            </select>
        </div>
    );
};

export default CardEscolhaCargoUsuario;
