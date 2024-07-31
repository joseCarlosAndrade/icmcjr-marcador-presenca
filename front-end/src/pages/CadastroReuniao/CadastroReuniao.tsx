import React from 'react'
import './CadastroReuniao.css'
import MenuButton from 'src/components/MenuButton/MenuButton.tsx';
import InputData from 'src/components/InputData/InputData.tsx';
import InputHora from 'src/components/InputHora/InputHora.tsx';

function CadastroReuniao() {
    return (
      <>
      <section className='cadastro-reuniao-section'>

        <MenuButton/>
        
        <div className='cadastro-reuniao-container'>
            <h1 id='titulo-cadastro-reuniao'>Cadastro de Reunião</h1>
            <h2 className='subtitulo-cadastro-reuniao'>Data</h2>
            <InputData/>
            <h2 className='subtitulo-cadastro-reuniao'>Horário</h2>
            <InputHora/>
            <button className='button-cadastro-reuniao'>Cadastrar</button>
        </div>
          
      </section>
      </>
    )
  }
  
export default CadastroReuniao