import React from 'react'
import './AceiteJustificativa.css'
import MenuButton from 'src/components/MenuButton/MenuButton.tsx';
import perfilImg from 'src/assets/perfil.svg';

function AceiteJustificativa() {
    return (
      <>
      <section className='aceite-justificativa-section'>

        <MenuButton/>

        <img src={perfilImg} alt="Perfil" className='perfil-imagem' />

        <h1 id='titulo-nome-perfil'>Bob Nelson Honda Cavalheiro</h1>
        
        { /* TO-DO: analisar o campo do BD que diz se essa pessoa é membro ou diretor */ }
        <h2 id='subtitulo-nome-perfil'>Membro</h2>

        <div className='container-azul-claro'>
            {/* TO-DO: a data deve ser exibida de acordo com a data que vier do BD */}
            <h1 id='titulo-falta'>Falta em 27/08/2024</h1>
            
            {/* TO-DO: a justificativa deve ser recebida através do BD */}
            <p className='paragrafo-justificativa-falta'>
                <strong>Justificativa:</strong> “Eu tinha prova na quinta e precisava estudar mais durante o horário da reunião geral"
            </p>

            <div className='container-buttons'>
                <button className='button-aceitar-justificativa'>✔ Aceitar justificativa</button>
                <button className='button-recusar-justificativa'>✘ Recusar justificativa</button>
            </div>
        </div>
          
      </section>
      </>
    )
}

export default AceiteJustificativa