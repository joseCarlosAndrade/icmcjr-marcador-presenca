import { useState } from 'react';
import CardMembrosData from 'src/components/CardMembrosData/CardMembrosData'
import './PresencaData.css'

function PresencasData(){

    const [presencaData, setPresencaData] = useState([
        { nome: "Camila Donda Ronchi", estado: "Presente" },
        { nome: "Carlos Neto", estado: "Presente" },
        { nome: "Felipe Carvalho", estado: "Justificado" },
        { nome: "Felipe Coqueiro", estado: "Presente" },
        { nome: "Gabriel Sousa Santos de Almeida", estado: "Ausente" },
        { nome: "Lucas Piovani Ferreira", estado: "Justificado" },
        { nome: "Luís Henrique Giorgetti Dantas", estado: "Presente" },
        { nome: "Marina Figueiredo", estado: "Presente" },
    ]);

    const updateEstado = (index: number, newEstado: string) => {
        const newData = [...presencaData];
        newData[index].estado = newEstado;
        setPresencaData(newData);
    };

    return (
        <div className='Consulta-presenca-data'>
            <div className='Header-consulta-presenca-data'>
                <h4>Reunião Geral</h4>
            </div>
            <div className='Consulta-presenca-data-nome'>
                {presencaData.map((item, index) => (
                        <CardMembrosData
                            key={item.nome}
                            nome={item.nome}
                            estado={item.estado}
                            onUpdateEstado={(newEstado: string) => updateEstado(index, newEstado)}
                        />
                ))}
            </div>
        </div>
    )
}

export default PresencasData