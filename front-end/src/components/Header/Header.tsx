import './Header.css'
// import MenuButton from 'src/components/MenuButton/MenuButton'
import perfilImg from 'src/assets/perfil.svg';

interface HeaderProps {
    name : string
    jobTitle : string
}

function HeaderPage( headerProps : HeaderProps) {
  return (
    <div className='headerpage-container'>
        

        <img src={perfilImg} alt="Perfil" className='perfil-imagem' />

        <div className='headerpage-container--titles'>
          <h1 id='titulo-nome-perfil'>{headerProps.name}</h1>

          { /* TO-DO: analisar o campo do BD que diz se essa pessoa é membro ou diretor */ }
          <h2 id='subtitulo-nome-perfil'>{headerProps.jobTitle}</h2>
        </div>
    </div>
  )
}

export default HeaderPage
