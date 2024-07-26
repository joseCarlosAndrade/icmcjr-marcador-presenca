import './CardMembrosJustificativas.css';

interface CardMembrosJustificativasProps {
    nome: string;
}

const CardMembrosJustificativas: React.FC<CardMembrosJustificativasProps> = ({ nome }) => {
    return (
        <div className='Card-Membros-Justificativas'>
            <h5>{nome}</h5>
            <i className="fa-solid fa-circle-plus"></i>
        </div>
    );
}

export default CardMembrosJustificativas;