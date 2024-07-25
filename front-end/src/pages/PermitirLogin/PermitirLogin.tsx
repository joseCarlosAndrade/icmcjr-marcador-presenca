import React from 'react'
import './PermitirLogin.css'
import MenuButton from 'src/components/MenuButton/MenuButton.tsx';
import { PossivelUsuario } from 'src/types';
import CardPossivelUsuario from 'src/components/CardPossivelUsuario/CardPossivelUsuario';

// Vetor de possíveis usuários 
const possiveisUsuarios: PossivelUsuario[] = [
    { nome: 'Cristiano Ronaldo', email: 'cristiano.ronaldo@gmail.com' },
    { nome: 'Lionel Andrés Messi', email: 'lionel.messi@gmail.com' },
    { nome: 'Neymar Junior', email: 'neymar.junior@gmail.com' },
    { nome: 'Zinédine Zidane', email: 'zinedine.zidane@gmail.com' },
    { nome: 'Cristiano Ronaldo', email: 'cristiano.ronaldo@gmail.com' },
    { nome: 'Lionel Andrés Messi', email: 'lionel.messi@gmail.com' },
    { nome: 'Neymar Junior', email: 'neymar.junior@gmail.com' },
    { nome: 'Zinédine Zidane', email: 'zinedine.zidane@gmail.com' }
];

function PermitirLogin() {
    return (
      <>
      <section className='permitir-login-section'>

        <div className='container-button-titulo'>
            <MenuButton/>
            <h1 id='titulo-permissao-login'>Permissão de login</h1>
        </div>

        <div className='container-possiveis-usuarios'>
            {/* TO-DO: receber dados do BD em vez de um vetor */}
            {possiveisUsuarios.map((user, index) => (
                <CardPossivelUsuario key={index} nome={user.nome} email={user.email}/>
            ))}
        </div>
        
      </section>
      </>
    )
}

export default PermitirLogin