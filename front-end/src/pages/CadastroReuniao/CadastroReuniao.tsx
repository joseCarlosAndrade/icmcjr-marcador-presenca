import React from 'react'
import './CadastroReuniao.css'
import InputData from 'src/components/InputData/InputData.tsx';
import InputHora from 'src/components/InputHora/InputHora.tsx';
import { Sidebar } from 'src/components';

function CadastroReuniao() {
    return (
      <>
      <section className='cadastro-reuniao-section'>

        <Sidebar></Sidebar>
        
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