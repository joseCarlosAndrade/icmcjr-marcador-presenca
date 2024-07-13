import './Template.css'

import { TemplateProps } from 'src/types'
// template para componentes react com typescript
// consultar o diretorio types para fazer as tipagens das props, assim como exporta las com index.ts

function Template( templateProp : TemplateProps) {
  return (
   // criando um componente template para usarem de exemplo! 
    <> 
    <div className='template-title'>Hello icmc jr! Template Props:</div> 
        <div className='template-container'>
            {templateProp.templateName}
            {templateProp.templateNumber}
        </div>
    </>
  )
}

export default Template