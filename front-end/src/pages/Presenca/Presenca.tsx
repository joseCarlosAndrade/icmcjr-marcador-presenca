import CardReuniaoGeral from 'src/components/CardReuniaoGeral/CardReuniaoGeral'

import './Presenca.css'

function Presencas(){

    return (
        <div className='Consulta-presenca'>
            <div className='Header-consulta-presenca'>
                <i className="fa-solid fa-bars"></i>
                <h3>Consulta de membros</h3>
            </div> 

            <CardReuniaoGeral/>

        </div>
    )
}

export default Presencas