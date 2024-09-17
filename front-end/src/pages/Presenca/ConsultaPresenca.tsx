import CardReuniaoGeral from 'src/components/CardReuniaoGeral/CardReuniaoGeral'
import './ConsultaPresenca.css'
import { Sidebar } from 'src/components'

function ConsultaPresencas(){

    return (
        <div className='Consulta-presenca'>
            <Sidebar></Sidebar>
            <div className='Header-consulta-presenca'>
                <h3>Consulta de presenças</h3>
            </div> 

            <CardReuniaoGeral/>
        </div>
    )
}

export default ConsultaPresencas