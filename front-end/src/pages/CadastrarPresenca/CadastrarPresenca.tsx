import { Header, CardPorcentagemPresenca } from 'src/components'
import './CadastrarPresenca.css'
import { warningIcon, correctIcon, exclamationIcon } from 'src/assets'


function CadastrarPresenca() {
  return (
    <section className='cadastrar-presenca-section'>
        <Header name='Jota ce' jobTitle='Membro'></Header>
        
        <div className='cadastrar-presenca-section--firstbox'>
            <CardPorcentagemPresenca porcentagem={13} presenca={2} falta={13}></CardPorcentagemPresenca>

            <img className='cadastrar-presenca-section--warning-icon' src={warningIcon.toString()} alt="warning" />

            {/* aviso de reuniao corrente */}
            <div className='cadastrar-presenca-section--text'><span className='orange-text'>Reunião ocorrendo!</span> Marque sua presença ou insira uma justificativa</div>


        </div>
        
        <div className='cadastrar-presenca-section--buttons'>
            <button className='cadastrar-presenca-section--button correctButton'><img className='correctIcon-presenca' src={correctIcon.toString()} alt="correct icon" />Cadastrar Presença</button>
            <button className='cadastrar-presenca-section--button exclamationButton'><img className='correctIcon-presenca' src={exclamationIcon.toString()} alt="correct icon" />Justificar falta</button>

        </div>

        </section>
    )
}

export default CadastrarPresenca