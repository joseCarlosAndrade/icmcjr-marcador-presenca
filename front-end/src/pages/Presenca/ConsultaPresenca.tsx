import CardReuniaoGeral from 'src/components/CardReuniaoGeral/CardReuniaoGeral'
import './ConsultaPresenca.css'

function ConsultaPresencas(){

    return (
        <div className='Consulta-presenca'>
            <div className='Header-consulta-presenca'>
                <i className="fa-solid fa-bars"></i>
                <h3>Consulta de presenças</h3>
            </div> 

            <CardReuniaoGeral/>
        </div>
    )
}

export default ConsultaPresencas