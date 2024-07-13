import { Link } from 'react-router-dom'
import { Template } from 'src/components'
import './TemplatePage.css'

function TemplatePage() {
  return (
    <>
       <Template 
         templateName='Nome passado para o componente Template! '
         templateNumber={10}>
       </Template>

       <Link to={'/otherpage'}>
        <button className='template-button'>Proxima Pagina</button>
        </Link>
   </>
  )
}

export default TemplatePage