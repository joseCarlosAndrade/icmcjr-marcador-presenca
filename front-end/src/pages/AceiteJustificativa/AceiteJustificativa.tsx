import './AceiteJustificativa.css'
import { Header, Sidebar } from 'src/components';

function AceiteJustificativa() {
    return (
      <>
      
      <section className='aceite-justificativa-section'>
      {/* <Sidebar></Sidebar> por algum motivo isso aqui nao funciona nessa pagina e nao sei o pq*/}
        <Header
          name={"Bob Nelson Honda Cavalheiro"}
          jobTitle={"Membro"}></Header>

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