import { Header } from 'src/components'
import './CadastrarJustificativa.css'
import { exclamationIcon } from 'src/assets'

function CadastrarJustificativa() {
  return (
    <section className='cadastrar-justificativa-section'>
        <Header
          name='Bob Nelson Honda Cavalheiro'
          jobTitle='Membro'>
      </Header>

      <div className='inserir-justificativa-container'>
        <p>Insira sua justificativa abaixo</p>
        <textarea placeholder='Digite aqui...' />

        <button className='inserir-justificativa-container'><img className='exclamationIcon-presenca' src={exclamationIcon.toString()} alt="correct icon" />Enviar justificativa</button>
      </div>

    </section>

    )
}

export default CadastrarJustificativa