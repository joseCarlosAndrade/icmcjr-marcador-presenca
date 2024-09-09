import { useNavigate } from 'react-router-dom';
import './CardMembrosJustificativas.css';

interface CardMembrosJustificativasProps {
    nome: string;
}

const CardMembrosJustificativas: React.FC<CardMembrosJustificativasProps> = ({ nome }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/AceiteJustificativa'); 
    };
    
    return (
        <div className='Card-Membros-Justificativas'>
            <h5>{nome}</h5>
            <i className="fa-solid fa-circle-plus" onClick={handleClick}></i>
        </div>
    );
}

export default CardMembrosJustificativas;