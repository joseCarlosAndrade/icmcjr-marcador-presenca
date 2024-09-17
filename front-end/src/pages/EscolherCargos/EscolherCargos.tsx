import React, { useState } from 'react'
import './EscolherCargos.css'
import { Usuario, Cargos } from 'src/types';
import CardEscolhaCargoUsuario from 'src/components/CardEscolhaCargoUsuario/CardEscolhaCargoUsuario';
import { Sidebar } from 'src/components';

// Vetor de usuários, simula a tabela "Usuário" do BD com todos os membros da EJ
const usuariosData: Usuario[] = [
    { nome: 'Camila Donda Ronchi', cargo: Cargos.Membro },
    { nome: 'Gabriel Sousa Santos de Almeida', cargo: Cargos.Membro },
    { nome: 'João Sepellone', cargo: Cargos.Diretor },
    { nome: 'Lucas Piovani Ferreira', cargo: Cargos.Membro },
    { nome: 'Luís Henrique Giorgetti Dantas', cargo: Cargos.Diretor },
    { nome: 'Marina Figueiredo', cargo: Cargos.Membro },
    { nome: 'Pedro Lucas da Silva', cargo: Cargos.Diretor }
];

function EscolherCargos() {

    const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosData);

    const handleChangeCargo = (nome: string, novoCargo: Cargos) => {
        setUsuarios(prevUsuarios =>
            prevUsuarios.map(usuario =>
                usuario.nome === nome ? { ...usuario, cargo: novoCargo } : usuario
            )
        );
    };

    const handleSaveChanges = () => {
        // TO-DO: lógica para salvar no BD as mudanças de cargo de usuários
        console.log('Mudanças salvas:', usuarios);
    };

    return (
        <>
            <section className='escolher-cargos-section'>
                <Sidebar></Sidebar>
                <div className='container-button-titulo'>
                    
                    <h1 id='titulo-alterar-cargos'>Alteração de cargos</h1>
                </div>

                <div className='container-escolha-cargo-usuarios'>
                    {usuarios.map((usuario, index) => (
                        <CardEscolhaCargoUsuario
                            key={index}
                            usuario={usuario}
                            onChangeCargo={handleChangeCargo}
                        />
                    ))}
                </div>

                <div className='container-button-salvar-mudancas'>
                    <button className='button-salvar-mudancas' onClick={handleSaveChanges}>✔ Salvar mudanças</button>
                </div>
            
            </section>
        </>
    )
}

export default EscolherCargos