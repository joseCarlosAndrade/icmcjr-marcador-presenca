import CardReuniaoGeral from 'src/components/CardReuniaoGeral/CardReuniaoGeral'
import './Justificativa.css'

function Justificativa(){
    return(

        <div className='Consulta-justificativa'>
            <div className='Header-consulta-justificativa'>
                <i className="fa-solid fa-bars"></i>
                <h3>Lista de membros</h3>
            </div>

            <CardReuniaoGeral/>
        </div>

    )
}

export default Justificativa