import { useNavigate } from 'react-router-dom';
import './CardMembrosPresencas.css';

interface CardMembrosPresencasProps {
    data: string;
    hora: string;
}

const CardMembrosPresencas: React.FC<CardMembrosPresencasProps> = ({data, hora}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/PresencaData'); 
    };

    return (
        <div className='Card-Membros-Presencas'>
            <h5>{data} - {hora}</h5>
            <i className="fa-solid fa-circle-plus" onClick={handleClick}></i>
        </div>
    );
}

export default CardMembrosPresencas;