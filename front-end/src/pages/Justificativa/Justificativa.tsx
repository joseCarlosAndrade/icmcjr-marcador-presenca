import CardReuniaoGeral from 'src/components/CardReuniaoGeral/CardReuniaoGeral'
import './Justificativa.css'
import { Sidebar } from 'src/components'

function Justificativa(){
    return(
        
        <div className='Consulta-justificativa'>
            <Sidebar></Sidebar>
            <div className='Header-consulta-justificativa'>
                <h3>Lista de membros</h3>
            </div>

            <CardReuniaoGeral/>
        </div>

    )
}

export default Justificativa