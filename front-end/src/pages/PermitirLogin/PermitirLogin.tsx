import React from 'react'
import './PermitirLogin.css'
import { PossivelUsuario } from 'src/types';
import CardPossivelUsuario from 'src/components/CardPossivelUsuario/CardPossivelUsuario';
import { Sidebar } from 'src/components';

// Vetor de possíveis usuários 
const possiveisUsuarios: PossivelUsuario[] = [
    { nome: 'Cristiano Ronaldo', email: 'cristiano.ronaldo@gmail.com' },
    { nome: 'Lionel Andrés Messi', email: 'lionel.andres.messi.@gmail.com' },
    { nome: 'Neymar Junior', email: 'neymar.junior@gmail.com' },
    { nome: 'Zinédine Zidane', email: 'zinedine.zidane@gmail.com' },
    { nome: 'Luís Henrique Giorgetti Dantas', email: 'luis.henrique.giorgetti.dantas.malu.oliveira.@gmail.com' },
    { nome: 'Jude Bellingham', email: 'hey.jude@gmail.com' },
    { nome: 'Ronaldo Fenômeno', email: 'ronaldo.nazario@gmail.com' }
];

function PermitirLogin() {
    return (
      <>
      <section className='permitir-login-section'>
      <Sidebar/>
        <div className='container-button-titulo'>
            
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