import './Cadastro.css'

function Cadastro(){
    return(
        <div className='Cadastro'>
            <h1>CADASTRO</h1>

            <div className='Cadastro-cadastro'>
                <div className='Cadastro-campos'>
                    <h3>Nome:</h3>
                    <div className='Cadastro-input'>
                        <i className="fa-regular fa-user"></i>
                        <input placeholder='Nome'/>
                    </div>
                </div>
                <div className='Cadastro-campos'>
                    <h3>Email:</h3>
                    <div className='Cadastro-input'>
                        <i className="fa-solid fa-envelope"></i>
                        <input placeholder='Email'/>
                    </div>
                </div>
                
                <div className='Cadastro-campos'>
                    <h3>Senha:</h3>
                    <div className='Cadastro-input'>
                        <i className="fa-solid fa-lock"></i>
                        <input placeholder='Senha'/>
                    </div>
                </div>
            </div>

            <button>Cadastrar</button>

        </div>
    )
}

export default Cadastro