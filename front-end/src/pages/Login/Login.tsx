import './Login.css'

function Login(){
    return(
        <div className='Login'>
            <h1>LOGIN</h1>

            <div className='Login-login'>
                <div className='Login-campos'>
                    <h3>Email:</h3>
                    <div className='Login-input'>
                        <i className="fa-solid fa-envelope"></i>
                        <input placeholder='Email'/> 
                    </div>
                </div>
                
                <div className='Login-campos'>
                    <h3>Senha:</h3>
                    <div className='Login-input'>
                        <i className="fa-solid fa-lock"></i>
                        <input placeholder='Senha'/>
                    </div>
                </div>
            </div>

            <button>Entrar</button>

        </div>
    )
}

export default Login