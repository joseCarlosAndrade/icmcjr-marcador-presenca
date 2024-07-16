import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <>
    <section className='homepage-section'>
        
        <img  src="src/assets/ICMCjr-gradient.svg" alt="icmc jr" />
        
        <div className='homepage-button-container'>
            <button className='button-login'>Entrar</button>
            <button className='button-singup'>Cadastrar</button>
        </div>
        
    </section>
    </>
  )
}

export default Homepage