import perfilImg from 'src/assets/perfil.svg';
import './CardFotoUsuario.css'

interface CardFotoUsuarioProps{
    nome: string;
    cargo: string;
}

const CardFotoUsuario: React.FC<CardFotoUsuarioProps> = ({nome, cargo}) =>{
    return(
        <div className="Card-foto-usuario">

            <div className='Card-foto-usuario-menu'>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className='Card-foto-usuario-dados'>
                <img src={perfilImg} alt="Perfil" className='perfil-imagem' />
                <h3>{nome}</h3>
                <h4>{cargo}</h4>
            </div>

        </div>
    )
}

export default CardFotoUsuario 