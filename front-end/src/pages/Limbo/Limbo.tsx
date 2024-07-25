import './Limbo.css'

function Limbo(){

    return(
        <div className='cadastro-pendente'>
            <h1>CADASTRO PENDENTE</h1>

            <img  src="src/assets/imagemLimbo.svg" alt="Imagem de uma mulher olhando uma ampulheta" />

            <div className='cadastro-pendente-descricao'> 
                <div className='cadastro-pendente-texto'>
                    <h3><strong>Seu cadastro foi recebido e está aguardando aprovação do diretor.</strong></h3>
                    <h3>Você será notificado assim que for aprovado.</h3>
                </div>
            
                <h3>Obrigado pela sua paciência!</h3>
            </div>
            

        </div>
    )

}

export default Limbo