import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardMembrosData.css';

interface CardMembrosDataProps {
    nome: string;
    estado: string;
    onUpdateEstado: (newEstado: string) => void;
}

const CardMembrosData: React.FC<CardMembrosDataProps> = ({ nome, estado, onUpdateEstado }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/PresencaIndividual', {state : { mensagem: "mensagem aqui"}}); 
    };

    const getBackgroundClass = (estado: string) => {
        if (estado === 'Presente') return 'bg-verde';
        if (estado === 'Justificado') return 'bg-laranja';
        return 'bg-vermelho';
    };

    const [isEdit, setIsEdit] = useState(false);
    const [formItem, setFormItem] = useState({
        estado: estado,
    });

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = event.target;
        if(value !== formItem.estado) {
            setFormItem({ estado: value });
            onUpdateEstado(value); 
        }
        
        setIsEdit(false); 
    };

    return (
        <div className={`Card-Membros-Presencas-Data ${getBackgroundClass(estado)}`}>

            <i className="fa-solid fa-pencil" onClick={() => setIsEdit(true)}></i>

            <div className='Card-Membros-Presencas-Data-Geral' onClick={!isEdit ? handleClick : undefined}>

                <h5 id='Card-Membros-Presencas-Data-Nome'>{nome}</h5>
                
                <div className='Card-Membros-Presencas-Data-Estado'>

                    {isEdit ? (
                        <select 
                            name="estado"
                            value={formItem.estado} 
                            onChange={handleChange}
                        >
                            <option value="Presente">Presente</option>
                            <option value="Justificado">Justificado</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    ) : (
                        <div>
                            <h5>{estado}</h5>
                        </div>
                    )}

                    {estado === 'Presente' || estado === 'Justificado' ? (
                        <i className="fa-solid fa-check"></i>
                    ) : (
                        <i className="fa-solid fa-x"></i>
                    )}

                </div>

            </div>

        </div>
    );
}

export default CardMembrosData;
